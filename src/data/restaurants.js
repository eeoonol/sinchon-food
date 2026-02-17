export async function fetchRestaurants() {
  const res = await fetch("/api/restaurants");

  if (!res.ok) {
    throw new Error("Failed to fetch restaurants");
  }

  const data = await res.json();
  return data;
}