import { useEffect, useRef, useState } from 'react'

/* ================================================================== */
/*  Scroll reveal (adds .is-visible when in view)                      */
/* ================================================================== */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div', threshold = 0.18 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}

/* Big headline whose lines slide up from a clip mask */
export function LineReveal({ lines, className = '', stagger = 90 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <h2 ref={ref} className={`line-reveal ${shown ? 'is-visible' : ''} ${className}`}>
      {lines.map((ln, i) => (
        <span key={i}>
          <span style={{ transitionDelay: `${i * stagger}ms` }}>{ln}</span>
        </span>
      ))}
    </h2>
  )
}

/* ================================================================== */
/*  Logo — faithful "Convincing Company / Investor Relations" mark     */
/* ================================================================== */
export function Logo({ tagline = false, className = '' }) {
  return (
    <span className={`inline-flex flex-col font-display font-extrabold uppercase tracking-[-0.01em] ${className}`}>
      <span className="flex items-baseline gap-1.5 whitespace-nowrap leading-none">
        <span className="text-brand">Convincing</span>
        <span className="text-white">Company</span>
      </span>
      {tagline && (
        <span className="mt-2 font-sans text-[0.4em] font-medium tracking-[0.45em] text-mist">
          Panel Placement
        </span>
      )}
    </span>
  )
}

/* ================================================================== */
/*  Section marker — "§ 03 ——— PANEL ARCHITECTURE"                     */
/* ================================================================== */
export function Marker({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="h-px w-12 bg-brand/60" />
      <span className="label text-brand/90">{children}</span>
    </div>
  )
}

/* ================================================================== */
/*  Photo plate placeholder (swap for real B&W photography)            */
/* ================================================================== */
export function Plate({ label, caption, ratio = 'aspect-[4/3]', icon = 'user', src, pos = 'object-center', className = '' }) {
  const Glyph = Icon[icon] || Icon.user
  return (
    <figure className={`group ${className}`}>
      <div className={`relative overflow-hidden border border-white/10 ${ratio}`}>
        {src ? (
          <img
            src={src}
            alt={label || ''}
            loading="lazy"
            className={`h-full w-full object-cover ${pos} grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.04]`}
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent grayscale">
            <Glyph className="h-1/4 w-1/4 text-white/10" />
            <span className="absolute left-3 top-3 kicker text-white/30">[ photo ]</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55))]" />
      </div>
      {(label || caption) && (
        <figcaption className="mt-3 flex items-center justify-between">
          <span className="kicker">{label}</span>
          <span className="kicker">{caption}</span>
        </figcaption>
      )}
    </figure>
  )
}

/* ================================================================== */
/*  Status badge + fit bar (conference pipeline)                       */
/* ================================================================== */
export function StatusBadge({ status }) {
  const map = {
    accepted: ['ACCEPTED', 'text-accept border-accept/40'],
    submitted: ['SUBMITTED', 'text-submit border-submit/40'],
    researching: ['RESEARCHING', 'text-faint border-white/15'],
  }
  const [label, cls] = map[status] || map.researching
  return (
    <span className={`label rounded-sm border px-2.5 py-1 text-[0.6rem] tracking-[0.2em] ${cls}`}>
      {label}
    </span>
  )
}

export function FitBar({ score }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref}>
      <div className="flex items-end justify-between">
        <span className="kicker">Fit score</span>
        <span className="font-display text-sm font-bold text-brand">
          {score ? `${score}/10` : '—'}
        </span>
      </div>
      <div className="mt-2 h-px w-full bg-white/10">
        <div
          className="h-px bg-brand transition-[width] duration-1000 ease-out"
          style={{ width: shown && score ? `${score * 10}%` : '0%' }}
        />
      </div>
    </div>
  )
}

/* ================================================================== */
/*  Button                                                             */
/* ================================================================== */
export function Button({ children, href = '#begin', variant = 'solid', className = '', ...props }) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 px-7 py-4 label text-[0.7rem] tracking-[0.2em] transition-all duration-300'
  const styles = {
    solid: 'bg-brand text-black hover:bg-brandBright',
    outline: 'border border-white/20 text-white hover:border-brand hover:text-brand',
  }
  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}

/* ================================================================== */
/*  Inline icons                                                       */
/* ================================================================== */
const I = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props} />
)
export const Icon = {
  user: (p) => (<I {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></I>),
  mic: (p) => (<I {...p}><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0M12 17v5" /></I>),
  arrow: (p) => (<I {...p}><path d="M5 12h14M12 5l7 7-7 7" /></I>),
  plus: (p) => (<I {...p}><path d="M12 5v14M5 12h14" /></I>),
  check: (p) => (<I {...p}><path d="M20 6 9 17l-5-5" /></I>),
  quote: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M9.5 6C6.5 7 5 9.5 5 13v5h6v-7H8c0-2 .8-3.2 2.6-3.8L9.5 6zm9 0c-3 1-4.5 3.5-4.5 7v5h6v-7h-3c0-2 .8-3.2 2.6-3.8L18.5 6z" /></svg>),
  target: (p) => (<I {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.5" fill="currentColor" /></I>),
  layers: (p) => (<I {...p}><path d="m12 3 9 5-9 5-9-5 9-5z" /><path d="m3 13 9 5 9-5" /></I>),
  compass: (p) => (<I {...p}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2z" /></I>),
  spark: (p) => (<I {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.4 2.4M16 16l2.4 2.4M18.4 5.6 16 8M8 16l-2.4 2.4" /></I>),
}
