import useInView from '../hooks/useInView.js'

/** Oversized white-to-slate heading. `as` lets it be a real h2 or a decorative p. */
export default function GhostHeading({ as: Tag = 'h2', id, className = '', decorative = false, children }) {
  const [ref, inView] = useInView({ threshold: 0.2 })
  return (
    <Tag
      ref={ref}
      id={id}
      aria-hidden={decorative || undefined}
      className={`ghost reveal ${inView ? 'is-in' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
