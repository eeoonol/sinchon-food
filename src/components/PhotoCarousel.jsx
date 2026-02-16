import { useRef, useState, useEffect } from 'react'

const SLIDES = ['menu', 'atmosphere', 'menuboard']

export default function PhotoCarousel({ photos }) {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveIndex = () => {
    const el = scrollRef.current
    if (!el) return
    const scrollLeft = el.scrollLeft
    const width = el.offsetWidth
    const index = Math.round(scrollLeft / width)
    setActiveIndex(Math.min(Math.max(0, index), 2))
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateActiveIndex)
    return () => el.removeEventListener('scroll', updateActiveIndex)
  }, [])

  const images = [
    photos?.menu,
    photos?.atmosphere,
    photos?.menuboard,
  ].filter(Boolean)

  return (
    <div className="restaurant-card-carousel-wrap">
      <div
        ref={scrollRef}
        className="photo-carousel"
        role="region"
        aria-label="식당 사진"
      >
        {images.map((src, i) => (
          <div key={i} className="photo-carousel-slide">
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="photo-carousel-dots" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`photo-carousel-dot ${i === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
