import { useMemo, useState } from "react"

export default function PhotoCarousel({ photos = [] }) {
  const safePhotos = useMemo(
    () => (Array.isArray(photos) ? photos.filter(Boolean) : []),
    [photos]
  )

  const [idx, setIdx] = useState(0)

  if (!safePhotos.length) {
    return (
      <div className="photo-carousel empty">
        <div className="photo-placeholder">No photo</div>
      </div>
    )
  }

  const prev = () => setIdx((i) => (i - 1 + safePhotos.length) % safePhotos.length)
  const next = () => setIdx((i) => (i + 1) % safePhotos.length)

  return (
    <div className="photo-carousel">
      <div className="photo-frame">
        <img
          src={safePhotos[idx]}
          alt={`restaurant photo ${idx + 1}`}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>

      {safePhotos.length > 1 && (
        <div className="photo-controls">
          <button type="button" className="photo-btn" onClick={prev} aria-label="이전 사진">
            ‹
          </button>

          <div className="photo-dots" aria-label="사진 인디케이터">
            {safePhotos.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`photo-dot ${i === idx ? "active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`${i + 1}번 사진`}
              />
            ))}
          </div>

          <button type="button" className="photo-btn" onClick={next} aria-label="다음 사진">
            ›
          </button>
        </div>
      )}
    </div>
  )
}
