// src/data/restaurants.js

// ✅ TopChips에서 쓰는 라벨 맵 (반드시 export 되어야 함)
export const CATEGORY_CHIP_LABELS = {
  korean: "한",
  western: "양",
  chinese: "중",
  japanese: "일",
}

// (선택) 앱에서 유효 타입 체크할 때 쓰기 좋음
export const VALID_TYPES = Object.keys(CATEGORY_CHIP_LABELS)

export async function fetchRestaurants() {
  const res = await fetch("/api/restaurants")

  if (!res.ok) {
    throw new Error("Failed to fetch restaurants")
  }

  return await res.json()
}
