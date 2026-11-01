/** Animated expand/collapse area. Closed content is hidden from keyboard and screen readers. */
export default function Collapse({ open, id, labelledBy, children }) {
  return (
    <div id={id} role="region" aria-labelledby={labelledBy} className={`fold ${open ? 'is-open' : ''}`} inert={!open}>
      <div className="fold__inner">{children}</div>
    </div>
  )
}

/** Plus that turns into a minus. */
export function PlusMinus({ open, className = '' }) {
  return (
    <svg className={`plusminus ${open ? 'is-open' : ''} ${className}`} viewBox="0 0 30 30" aria-hidden="true">
      <line className="plusminus__h" x1="0" y1="15" x2="30" y2="15" />
      <line className="plusminus__v" x1="15" y1="0" x2="15" y2="30" />
    </svg>
  )
}
