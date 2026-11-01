import { useState } from 'react'
import { site } from '../data/site.js'
import contactImg from '../assets/contact.webp'
import SocialLinks from './SocialLinks.jsx'
import useInView from '../hooks/useInView.js'

export default function Contact() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 })
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!site.email) {
      setStatus('Add your contact email in src/data/site.js before sending.')
      return
    }

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

    setStatus(`Your email app should open with a draft. If it does not, email ${site.email} directly.`)
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className={`contact ${inView ? 'is-in' : ''}`}
        aria-labelledby="contact-title"
      >
        <p className="ghost contact__ghost" aria-hidden="true">Contact</p>
        <div className="contact__layout">
          <img
            className="contact__image"
            src={contactImg}
            width="1200"
            height="1200"
            loading="lazy"
            decoding="async"
            alt={`Illustrated portrait of ${site.firstName}`}
          />
          <form className="contact__form" onSubmit={handleSubmit}>
            <h2 id="contact-title" className="contact__title">Let&apos;s Talk</h2>
            <div className="contact__fields">
              <label className="contact__field">
                <span>Full Name*</span>
                <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
              </label>
              <label className="contact__field">
                <span>Email*</span>
                <input name="email" type="email" autoComplete="email" placeholder="Your email" required />
              </label>
              <label className="contact__field contact__field--wide">
                <span>Subject*</span>
                <input name="subject" type="text" placeholder="How can I help?" required />
              </label>
              <label className="contact__field contact__field--wide">
                <span>Message*</span>
                <textarea name="message" rows="2" placeholder="Tell me about your project" required />
              </label>
            </div>
            <button className="pill-btn contact__button" type="submit">Send Message</button>
            <p className="contact__hint">This opens a draft in your email app; review it and press Send.</p>
            <p className="contact__status" role="status" aria-live="polite">{status}</p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__top">
          <a href="#home" className="site-footer__brand" aria-label={`${site.name}, back to top`}>
            <span className="monogram__dot" aria-hidden="true" />
            {site.monogram}
          </a>
          <nav aria-label="Footer">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        </div>
        <p className="site-footer__copyright">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <SocialLinks className="site-footer__socials" />
        <p className="site-footer__signature" aria-hidden="true">{site.name}</p>
      </footer>
    </>
  )
}
