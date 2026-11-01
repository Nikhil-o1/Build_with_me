import { site } from '../data/site.js'

const icons = {
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.8" r="1" fill="currentColor" />
    </>
  ),
  linkedin: (
    <text x="12" y="15.5" textAnchor="middle" fontSize="9.5" fontWeight="700" fontFamily="Inter, sans-serif" fill="currentColor">in</text>
  ),
  github: <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 2.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 2.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 16.13V22" transform="translate(2 0) scale(.83)" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
}

/** Circle social links. Entries without an href in site.js are shown as unavailable. */
export default function SocialLinks({ className = '', size = 36 }) {
  return (
    <ul className={`flex items-center gap-[10px] ${className}`}>
      {site.socials.map(({ id, label, href }) => {
        const cls = 'social-btn'
        const style = { width: size, height: size }
        const svg = (
          <svg viewBox="0 0 24 24" width="62%" height="62%" aria-hidden="true">{icons[id]}</svg>
        )
        return (
          <li key={id}>
            {href ? (
              <a className={cls} style={style} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} data-cursor="link">
                {svg}
              </a>
            ) : (
              <span className={`${cls} social-btn--unavailable`} style={style} role="img" aria-label={`${label} link not added`} title="Add your link in src/data/site.js">
                {svg}
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
