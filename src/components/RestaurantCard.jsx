import { useState } from 'react'
import PhotoCarousel from './PhotoCarousel'
import DetailModal from './DetailModal'
import Toast from './Toast'

export default function RestaurantCard({ restaurant }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState(false)

  const copyLink = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(restaurant.naverMapUrl).then(() => {
        setToast(true)
        setTimeout(() => setToast(false), 2000)
      })
    }
  }

  return (
    <>
      <article className="restaurant-card">
        <div className="restaurant-card-inner">
          <div className="restaurant-card-content" style={{ position: 'relative' }}>
            <button
              type="button"
              className="card-link-btn"
              onClick={copyLink}
              aria-label="네이버 지도 링크 복사"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </button>
            <h3 className="restaurant-card-name">{restaurant.name}</h3>
            <p className="restaurant-card-desc">{restaurant.shortDesc}</p>
            <div className="restaurant-card-actions">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setModalOpen(true)}
              >
                상세보기
              </button>
              <a
                href={restaurant.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                지도 보기
              </a>
            </div>
          </div>
          <PhotoCarousel photos={restaurant.photos} />
        </div>
      </article>

      {modalOpen && (
        <DetailModal
          restaurant={restaurant}
          onClose={() => setModalOpen(false)}
        />
      )}

      {toast && <Toast message="링크 복사됨" />}
    </>
  )
}
