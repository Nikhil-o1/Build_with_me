import { site } from '../data/site.js'
import heroImg from '../assets/hero.webp'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-stage">
        <p className="hero-ghost ghost" aria-hidden="true">DESIGNER</p>
        <span className="hero-name hero-name--l" aria-hidden="true">Nikhil</span>
        <span className="hero-name hero-name--r" aria-hidden="true">Mahapure</span>
        <div className="hero-char">
          <div className="hero-char__float">
            <div className="hero-char__clip">
              <img
                src={heroImg}
                width="1231"
                height="1278"
                alt={`Illustrated portrait of ${site.firstName} wearing headphones and an orange hoodie`}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <span className="hero-tag hero-tag--dev" aria-hidden="true">Developer</span>
        <span className="hero-tag hero-tag--des" aria-hidden="true">Designer</span>
      </div>

      <div className="hero-copy">
        <p className="hero-hi">Hi, I&apos;m {site.firstName}</p>
        <h1 id="hero-title" className="hero-headline">
          <span className="sr-only">{site.name}: </span>
          <span className="reveal-line"><span>UI/UX Designer,</span></span>
          <span className="reveal-line"><span>Frontend Dev.</span></span>
        </h1>
        <div className="hero-meta">
          <p className="hero-loc">{site.location}</p>
          {site.email ? (
            <a className="hero-mail" href={`mailto:${site.email}`} data-cursor="link">{site.email}</a>
          ) : (
            <p className="hero-mail hero-mail--unavailable">Add your email in src/data/site.js</p>
          )}
        </div>
        <a href="#contact" className="hero-badge" data-cursor="button">
          <span>Let&apos;s<br />Discuss</span>
        </a>
      </div>
    </section>
  )
}
