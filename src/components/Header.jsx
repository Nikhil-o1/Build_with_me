import { useEffect, useState, useCallback } from 'react'
import { Menu } from 'lucide-react'
import { site } from '../data/site.js'
import SocialLinks from './SocialLinks.jsx'
import MobileMenu from './MobileMenu.jsx'

export function Monogram() {
  return (
    <a href="#home" className="monogram" aria-label={`${site.name}, back to top`}>
      <span className="monogram__dot" aria-hidden="true" />
      {site.monogram}
    </a>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <nav aria-label="Primary" className="site-header__nav">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" data-cursor="link">{item.label}</a>
          ))}
        </nav>

        <Monogram />

        <div className="site-header__right">
          <SocialLinks className="site-header__socials" />
          <a href="#contact" className="pill-btn" data-cursor="button">Hire Me!</a>
          <button
            type="button"
            className="social-btn site-header__burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
    <MobileMenu open={open} onClose={close} />
    </>
  )
}
