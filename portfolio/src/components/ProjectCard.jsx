import { projectImage } from '../data/assets.js'
import useInView from '../hooks/useInView.js'

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="46%" height="46%" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  )
}

export default function ProjectCard({ project, index }) {
  const { category, title, image, url, external } = project
  const src = projectImage(image)
  const [ref, inView] = useInView({ threshold: 0.12 })
  const label = title ? `${category}: ${title}` : category
  const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <li ref={ref} className={`tile reveal ${inView ? 'is-in' : ''} ${src ? 'has-image' : ''}`} style={{ '--i': index }}>
      {src ? (
        <img className="tile__img" src={src} alt={title || `${category} project`} width="528" height="522" loading="lazy" decoding="async" />
      ) : (
        <>
          <svg className="tile__x" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" />
            <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className="tile__placeholder">Project image</span>
        </>
      )}

      <div className="tile__bar">
        <span className="tile__pill">{category}</span>
        {url ? (
          <a className="tile__go" href={url} aria-label={`View project: ${label}`} data-cursor="project" {...linkProps}>
            <Arrow />
          </a>
        ) : (
          <span className="tile__go is-off" role="img" aria-label={`${label}: project link not added yet`} title="Add a url in src/data/projects.js">
            <Arrow />
          </span>
        )}
      </div>
      {url && <a className="tile__cover" href={url} tabIndex={-1} aria-hidden="true" data-cursor="project" {...linkProps} />}
    </li>
  )
}
