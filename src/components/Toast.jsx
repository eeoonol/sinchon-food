import { createPortal } from 'react-dom'

export default function Toast({ message }) {
  const content = (
    <div className="toast-wrap">
      <div className="toast">{message}</div>
    </div>
  )
  return createPortal(content, document.body)
}
