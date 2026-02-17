export default async function handler(req, res) {
  const AIRTABLE_TOKEN = process.env.VITE_AIRTABLE_TOKEN
  const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID

  const response = await fetch(
    `https://api.airtable.com/v0/${BASE_ID}/Restaurants`,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
    }
  )

  const data = await response.json()

  // Airtable → 앱용 데이터 변환
  const restaurants = data.records.map((record) => {
    const f = record.fields

    return {
      id: record.id,
      name: f.Name,
      shortDesc: f.ShortDesc,
      category: f.Category,
      naverMapUrl: f.NaverMapURL,

      photos: [
        f["Image1(Menu)"]?.[0]?.url,
        f["Image2(Vibe)"]?.[0]?.url,
        f["Image3(Menu)"]?.[0]?.url,
      ].filter(Boolean),

      walkFromSinchon: f.WalkFromSinchonMin,
      walkFromYonsei: f.WalkFromYonseiMin,
      seatingLayout: f.SeatingLayout,
      size: f.Size,
    }
  })

  res.status(200).json(restaurants)
}
