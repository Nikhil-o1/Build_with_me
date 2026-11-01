import { useState } from 'react'
import { services } from '../data/services.js'
import GhostHeading from './GhostHeading.jsx'
import Collapse, { PlusMinus } from './Collapse.jsx'

export default function Services() {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <GhostHeading as="p" decorative className="services-ghost">Service</GhostHeading>
      <h2 id="services-title" className="services-label">
        Services<span className="services-label__bar" aria-hidden="true" />
      </h2>

      <ul className="svc-list">
        {services.map((s) => {
          const open = openId === s.id
          return (
            <li
              key={s.id}
              className={`svc-card ${open ? 'is-open' : ''}`}
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') setOpenId(s.id)
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === 'mouse') setOpenId(null)
              }}
              onFocus={() => setOpenId(s.id)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setOpenId(null)
              }}
            >
              <h3 className="svc-card__title">
                <button
                  type="button"
                  id={`${s.id}-btn`}
                  className="svc-card__head"
                  aria-expanded={open}
                  aria-controls={`${s.id}-panel`}
                  onClick={(event) => {
                    if (event.nativeEvent.pointerType === 'mouse' || event.detail === 0) return
                    setOpenId(open ? null : s.id)
                  }}
                  data-cursor="button"
                >
                  <span className="svc-card__name">{s.title}</span>
                  <PlusMinus open={open} className="svc-card__icon" />
                </button>
              </h3>
              <Collapse open={open} id={`${s.id}-panel`} labelledBy={`${s.id}-btn`}>
                <p className="svc-card__text">{s.text}</p>
              </Collapse>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
