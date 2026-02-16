import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function DetailModal({ restaurant, onClose }) {
  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => document.body.classList.remove('modal-open')
  }, [])

  const d = restaurant.detail || {}
  const layout = Array.isArray(d.seatingLayout) ? d.seatingLayout.join(', ') : (d.seatingLayout || '-')
  const sizeLevel = d.sizeLevel || '-'

  const content = (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">
            {restaurant.name}
          </h2>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="닫기"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <section className="modal-section">
            <h3 className="modal-section-title">신촌역 기준 도보 거리</h3>
            <p className="modal-section-content">
              {d.sinchonStationWalkMin != null ? `도보 ${d.sinchonStationWalkMin}분` : '-'}
            </p>
          </section>
          <section className="modal-section">
            <h3 className="modal-section-title">연세대 정문 기준 도보 거리</h3>
            <p className="modal-section-content">
              {d.yonseiGateWalkMin != null ? `도보 ${d.yonseiGateWalkMin}분` : '-'}
            </p>
          </section>
          <section className="modal-section">
            <h3 className="modal-section-title">자리 레이아웃</h3>
            <p className="modal-section-content">{layout}</p>
          </section>
          <section className="modal-section">
            <h3 className="modal-section-title">음식점 크기</h3>
            <p className="modal-section-content">{sizeLevel}</p>
          </section>
          <section className="modal-section">
            <h3 className="modal-section-title">상세 메뉴 + 가격</h3>
            <ul className="modal-menu-list">
              {(d.menuItems || []).map((item, i) => (
                <li key={i}>
                  <span>{item.name}</span>
                  <span>{item.price != null ? `${item.price.toLocaleString()}원` : ''}</span>
                </li>
              ))}
            </ul>
          </section>
          {d.notes && (
            <section className="modal-section">
              <h3 className="modal-section-title">기타 정보</h3>
              <p className="modal-section-content">{d.notes}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  )

  return createPortal(content, document.body)
}
