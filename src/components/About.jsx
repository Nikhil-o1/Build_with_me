import { site } from '../data/site.js'
import aboutImg from '../assets/about.webp'
import useInView from '../hooks/useInView.js'

const lines = [
  'UI/UX Designer crafting intuitive, user-',
  'friendly experiences through',
  'wireframing, prototyping, &',
  'visual design.',
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <h2 id="about-title" className="about-pill">About me</h2>

      <p ref={ref} className={`about-statement ${inView ? 'is-in' : ''}`}>
        {lines.map((l, i) => (
          <span key={l} className="about-line" style={{ '--i': i }}>
            <span>{l}{i < lines.length - 1 ? ' ' : ''}</span>
          </span>
        ))}
      </p>

      <div className="about-art">
        <hr className="about-rule" />
        <img
          className="about-portrait"
          src={aboutImg}
          width="1200"
          height="1200"
          loading="lazy"
          decoding="async"
          alt={`Illustrated portrait of ${site.firstName}`}
        />
        {site.cvUrl ? (
          <a className="cv-btn" href={site.cvUrl} download data-cursor="button">
            <span>Download<br />my CV</span>
          </a>
        ) : (
          <span className="cv-btn cv-btn--unavailable" aria-disabled="true" title="Add your CV link in src/data/site.js">
            <span>Download<br />my CV</span>
          </span>
        )}
      </div>
    </section>
  )
}
