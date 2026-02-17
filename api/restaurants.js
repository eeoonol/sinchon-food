export default async function handler(req, res) {
  try {
    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const table = process.env.AIRTABLE_TABLE;

    if (!token || !baseId || !table) {
      return res.status(500).json({
        error: "Missing env vars",
        needed: ["AIRTABLE_TOKEN", "AIRTABLE_BASE_ID", "AIRTABLE_TABLE"],
      });
    }

    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}?pageSize=100`;

    const r = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const text = await r.text();
    if (!r.ok) {
      return res.status(r.status).json({
        error: "Airtable request failed",
        details: text,
      });
    }

    const data = JSON.parse(text);

    const imgUrl = (arr) =>
      Array.isArray(arr) && arr[0] && arr[0].url ? arr[0].url : null;

    const normalized = (data.records || []).map((rec) => {
      const f = rec.fields || {};
      return {
        id: rec.id,
        name: f.Name ?? "",
        category: f.Category ?? "",
        shortDesc: f.ShortDesc ?? "",
        naverMapUrl: f.NaverMapURL ?? f.NaverMapUrl ?? "",
        images: [imgUrl(f.Image1), imgUrl(f.Image2), imgUrl(f.Image3)].filter(Boolean),
      };
    });

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    return res.status(200).json(normalized);
  } catch (e) {
    return res.status(500).json({ error: "Server error", details: String(e) });
  }
}
