// api/restaurants.js

export default async function handler(req, res) {
  try {
    const token =
      process.env.AIRTABLE_TOKEN ||
      process.env.VITE_AIRTABLE_TOKEN;

    const baseId =
      process.env.AIRTABLE_BASE_ID ||
      process.env.VITE_AIRTABLE_BASE_ID;

    const tableName =
      process.env.AIRTABLE_TABLE || "Restaurants";

    if (!token || !baseId) {
      return res.status(500).json({
        error: "Missing env vars",
        token: !!token,
        baseId: !!baseId,
      });
    }

    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
      tableName
    )}`;

    const r = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await r.json();

    if (!r.ok) {
      return res.status(r.status).json(json);
    }

    const restaurants = (json.records || []).map((rec) => {
      const f = rec.fields || {};

      const photos = [
        f["Image1(Menu)"]?.[0]?.url,
        f["Image2(Vibe)"]?.[0]?.url,
        f["Image3(Menu)"]?.[0]?.url,
      ].filter(Boolean);

      return {
        id: rec.id,
        name: f["Name"] || "",
        shortDesc: f["ShortDesc"] || "",
        category: f["Category"] || "",
        naverMapUrl: f["NaverMapURL"] || "",
        photos,
      };
    });

    res.status(200).json(restaurants);
  } catch (e) {
    res.status(500).json({
      error: "Server crashed",
      message: e.message,
    });
  }
}
