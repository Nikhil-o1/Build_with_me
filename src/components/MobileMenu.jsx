import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { site } from '../data/site.js'
import SocialLinks from './SocialLinks.jsx'

export default function MobileMenu({ open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div
      id="mobile-menu"
      className={`mobile-menu ${open ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
      inert={!open}
    >
      <button ref={closeRef} type="button" className="social-btn mobile-menu__close" onClick={onClose} aria-label="Close menu">
        <X size={18} />
      </button>
      <nav aria-label="Mobile">
        <ul>
          {site.nav.map((item, i) => (
            <li key={item.href} style={{ '--i': i }}>
              <a href={item.href} onClick={onClose}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mobile-menu__foot">
        <SocialLinks />
        <a href="#contact" className="pill-btn" onClick={onClose}>Hire Me!</a>
      </div>
    </div>
  )
}
