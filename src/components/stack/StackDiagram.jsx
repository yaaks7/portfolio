import { useEffect, useId, useRef, useState } from 'react'
import './StackDiagram.css'

/**
 * Renders a stack diagram from a layout spec (see sentimentStack.js / harmoniqStack.js).
 *
 * The spec holds two hand-placed layouts: a wide one and a two-column one for phones.
 * The component picks one from its own width, then scales it down only if it still does not fit.
 * Colours come from the site's CSS variables, so the .dark-theme class restyles it for free.
 */
function StackDiagram({ data, caption }) {
  const frameRef = useRef(null)
  const [width, setWidth] = useState(0)
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')

  useEffect(() => {
    const el = frameRef.current
    if (!el) return undefined
    const measure = () => setWidth(el.clientWidth)
    measure()
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const measured = width > 0
  const layout = measured && width < data.breakpoint ? data.narrow : data.wide
  const scale = measured ? Math.min(1, width / layout.w) : 1

  return (
    <figure className="stack-diagram" style={{ '--stack-accent': data.accent }}>
      <div
        ref={frameRef}
        className="sd-frame"
        style={{ height: measured ? Math.ceil(layout.h * scale) : undefined }}
        role="img"
        aria-label={data.label}
      >
        {measured && (
          <div
            className="sd-stage"
            style={{
              width: layout.w,
              height: layout.h,
              transform: `scale(${scale})`,
              left: Math.max(0, (width - layout.w * scale) / 2),
            }}
            aria-hidden="true"
          >
            {layout.groups.map((g) => (
              <div
                key={g.id}
                className={`sd-group${g.variant === 'accent' ? ' sd-group--accent' : ''}`}
                style={{ left: g.x, top: g.y, width: g.w, height: g.h }}
              >
                <div className={`sd-glabel sd-glabel--${g.pos}`}>
                  {g.icon && <img src={data.icons[g.icon]} alt="" />}
                  {g.label}
                </div>
              </div>
            ))}

            <svg className="sd-edges" width={layout.w} height={layout.h} viewBox={`0 0 ${layout.w} ${layout.h}`}>
              <defs>
                <marker id={`${uid}-flow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
                  <path className="sd-arrow sd-arrow--flow" d="M0 0 L10 5 L0 10 z" />
                </marker>
                <marker id={`${uid}-link`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
                  <path className="sd-arrow sd-arrow--link" d="M0 0 L10 5 L0 10 z" />
                </marker>
              </defs>
              {layout.edges.map((e, i) => (
                <g key={i}>
                  <path
                    className={`sd-edge sd-edge--${e.kind === 'flow' ? 'flow' : 'link'}${e.kind === 'dash' ? ' sd-edge--dash' : ''}`}
                    d={e.d}
                    markerEnd={`url(#${uid}-${e.kind === 'flow' ? 'flow' : 'link'})`}
                  />
                  {e.label && (
                    <text className="sd-el" x={e.lx} y={e.ly} textAnchor={e.anchor}>
                      {e.label}
                    </text>
                  )}
                </g>
              ))}
            </svg>

            {layout.nodes.map((n) => (
              <div key={n.id} className="sd-node" style={{ left: n.cx - 66, top: n.top }}>
                <div className={`sd-tile${n.tile === 'wide' ? ' sd-tile--wide' : ''}`}>
                  <img src={data.icons[n.icon]} alt="" />
                </div>
                <div className="sd-name"><span>{n.name}</span></div>
                <div className="sd-role"><span>{n.role}</span></div>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="sd-sr">{data.description}</p>

      <div className="sd-legend" aria-hidden="true">
        <span><i className="sd-sw sd-sw--flow" />main flow</span>
        <span><i className="sd-sw sd-sw--link" />used by / reads</span>
      </div>
      {caption && <figcaption className="sd-caption">{caption}</figcaption>}
      <p className="sd-credit">
        Logos from svgl, devicon, gilbarbara/logos, Lucide and each project's own repository. Brand logos are
        trademarks of their owners.
      </p>
    </figure>
  )
}

export default StackDiagram
