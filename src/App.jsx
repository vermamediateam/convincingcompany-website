import { useState, useEffect } from 'react'
import {
  Reveal,
  LineReveal,
  Logo,
  Marker,
  StatusBadge,
  FitBar,
  Icon,
} from './components/ui.jsx'
import adeleImg from './assets/adele.jpg'
import chipImg from './assets/chip.jpg'
import heroVideo from './assets/hero.mp4'
import chipAndersonCooper from './assets/chip-anderson-cooper.jpg'
import chipNBC from './assets/chip-nbc.jpg'
import chipOutfront from './assets/chip-outfront.jpg'

/* ================================================================== */
/*  SHARED                                                             */
/* ================================================================== */
const BOOK = 'mailto:adele@convincingcompany.com?subject=Strategy%20Call%20Request'
const CASE_STUDIES_URL = 'https://convincingcompany.com/case-studies/'

const STAGE_IMGS = [
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
  'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
  'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
]

/* ================================================================== */
/*  NAV                                                                */
/* ================================================================== */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(9,9,9,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}
    >
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <nav className="flex items-center justify-between gap-3 py-5">
          <a href="#top" aria-label="The Convincing Company" className="min-w-0">
            <Logo className="text-sm leading-none sm:text-base" />
          </a>
          <div className="hidden items-center gap-2 lg:flex">
            <span className="kicker text-faint">Panel Placement</span>
            <span className="text-faint/50">·</span>
            <span className="kicker text-faint">For Founders &amp; Executives</span>
          </div>
          <a
            href={BOOK}
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap bg-brand px-5 py-2.5 label text-[0.62rem] text-white transition-colors hover:bg-brandBright"
          >
            Book a Call →
          </a>
        </nav>
      </div>
    </header>
  )
}

/* ================================================================== */
/*  HERO — full-height video panel                                     */
/* ================================================================== */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ display: 'flex', minHeight: '100vh' }}>

      {/* LEFT — text column */}
      <div
        className="relative z-10 flex flex-col justify-center"
        style={{ flex: 1, minWidth: 0, padding: 'clamp(6rem,9vh,8rem) clamp(2rem,6vw,6rem) clamp(3rem,5vh,5rem)' }}
      >
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.04,
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 90% 80% at 30% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)' }}
        />

        <div className="relative z-10">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-brand/70" />
              <span className="label text-brand">For Founders &amp; Executives</span>
            </div>
          </Reveal>

          <LineReveal
            className="display mt-8 text-[clamp(2rem,3.4vw,4rem)]"
            lines={[
              "You've earned",
              "the credibility.",
              "The market just",
              <span key="red" className="text-brand">{"hasn't heard it."}</span>,
            ]}
          />

          <Reveal delay={120}>
            <p className="mt-8 text-lg leading-relaxed text-mist" style={{ maxWidth: '32rem' }}>
              The panels, the stages, the press are going to people no better than you —{' '}
              <span className="font-medium text-white">just more visible.</span>{' '}
              We change that.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <a
              href={BOOK}
              className="group mt-10 inline-flex items-center gap-3 bg-brand px-8 py-5 label text-[0.7rem] tracking-[0.22em] text-white transition-colors hover:bg-brandBright"
            >
              Book a strategy call
              <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </a>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-12 flex gap-10 border-t border-white/8 pt-10">
              <div>
                <div className="font-display text-2xl font-extrabold text-white">197</div>
                <div className="kicker mt-1 text-faint">Placements in one campaign</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-white">$100M+</div>
                <div className="kicker mt-1 text-faint">Exit driven by visibility</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-white">50 yrs</div>
                <div className="kicker mt-1 text-faint">Combined experience</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* RIGHT — full-height video, no container border */}
      <div
        className="relative overflow-hidden"
        style={{ width: 'clamp(280px, 42%, 680px)', flexShrink: 0 }}
      >
        <video
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%', display: 'block' }}
          controls
          preload="metadata"
          src={heroVideo}
        />
        {/* Blend edge into left panel */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{ width: '100px', background: 'linear-gradient(to right, #090909, transparent)' }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: '140px', background: 'linear-gradient(to top, #090909, transparent)' }}
        />
      </div>

    </section>
  )
}

/* ================================================================== */
/*  FEATURED IN — brand-colored logos                                 */
/* ================================================================== */
const FEATURED_OUTLETS = [
  { name: 'The Wall Street Journal', cls: 'font-serif text-2xl font-bold tracking-tight', color: '#D4AF6F' },
  { name: 'Bloomberg', cls: 'font-display text-xl font-extrabold uppercase tracking-tight', color: '#A78BFA' },
  { name: 'CNN', cls: 'font-display text-3xl font-black tracking-tight', color: '#E84545' },
  { name: 'NBC', cls: 'font-display text-3xl font-black tracking-widest', color: '#5EB8FF' },
  { name: 'CBS', cls: 'font-display text-3xl font-black tracking-tight', color: '#6B9CF4' },
  { name: 'Fox News', cls: 'font-display text-xl font-extrabold uppercase tracking-tight', color: '#FF8C42' },
  { name: 'Entrepreneur', cls: 'font-display text-base font-extrabold uppercase tracking-tight', color: '#34D399' },
  { name: 'Fast Company', cls: 'font-display text-base font-extrabold uppercase tracking-[0.12em]', color: '#FB923C' },
  { name: 'Inc.', cls: 'font-display text-2xl font-black tracking-tight', color: '#F87171' },
]

function FeaturedIn() {
  return (
    <section className="border-y border-white/8 bg-coal py-12">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <p className="kicker mb-10 text-center text-faint">The Convincing Company has been featured in</p>
      </div>
      <div
        className="relative overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div
          className="flex w-max items-center gap-20"
          style={{ animation: 'marquee 32s linear infinite' }}
        >
          {[...FEATURED_OUTLETS, ...FEATURED_OUTLETS, ...FEATURED_OUTLETS].map((o, i) => (
            <span
              key={i}
              className={`${o.cls} whitespace-nowrap transition-opacity hover:opacity-100`}
              style={{ color: o.color, opacity: 0.75 }}
            >
              {o.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  THE ROOMS — conference tiles with stage images                    */
/* ================================================================== */
const CONFERENCES = [
  { name: 'Aspen Ideas Festival', when: 'Jun 2026', size: '3,400 attendees', score: 9, status: 'accepted' },
  { name: 'Milken Global', when: 'May 2026', size: '5,000 attendees', score: 9, status: 'accepted' },
  { name: 'World Economic Forum · Davos', when: 'Jan 2027', size: '2,800 attendees', score: 8, status: 'submitted' },
  { name: 'TED Next', when: 'Oct 2026', size: '1,800 attendees', score: 8, status: 'submitted' },
  { name: 'South by Southwest', when: 'Mar 2027', size: '12,000 attendees', score: 7, status: 'submitted' },
  { name: 'Web Summit · Lisbon', when: 'Nov 2026', size: '70,000 attendees', score: 7, status: 'researching' },
  { name: 'Fortune Most Powerful Women', when: 'Oct 2026', size: '500 attendees', score: 8, status: 'researching' },
  { name: 'Cannes Lions', when: 'Jun 2027', size: '15,000 attendees', score: null, status: 'researching' },
]

function Pipeline() {
  return (
    <section id="rooms" className="border-b border-white/8 bg-ink px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-xl">
            <Reveal>
              <Marker>The Rooms</Marker>
            </Reveal>
            <LineReveal
              className="display mt-8 text-[clamp(2rem,4vw,3.8rem)]"
              lines={[
                "You don't get there",
                "by blasting outreach",
                "into a void.",
              ]}
            />
          </div>
          <Reveal delay={100}>
            <p className="max-w-sm text-base leading-relaxed text-mist lg:mt-24">
              We know how these ecosystems work, who controls the lineups, and how to position you so the
              answer is yes — then put you in the rooms where your buyers already sit.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONFERENCES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 55}>
              <article className="group relative overflow-hidden border border-white/8">
                <img
                  src={STAGE_IMGS[i % STAGE_IMGS.length]}
                  alt={c.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />
                {/* status badge */}
                <div className="absolute top-3 right-3">
                  <StatusBadge status={c.status} />
                </div>
                {/* text */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-sm font-extrabold uppercase leading-snug text-white">{c.name}</h3>
                  <p className="kicker mt-1.5 text-white/55">{c.when} · {c.size}</p>
                  {c.score && (
                    <div className="mt-3">
                      <FitBar score={c.score} />
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  THE PANEL ADVANTAGE                                                */
/* ================================================================== */
function PanelArchitecture() {
  const deliverables = [
    ["You're not alone on stage", "It's a conversation — someone asking you questions you already know the answers to. No keynote to memorize."],
    ["No spotlight to carry", "You just show up as the expert you already are, and the audience draws its own conclusions."],
    ["The doors compound", "Once you've done a few, the relationships, credibility and inbound start to stack on their own."],
  ]
  return (
    <section id="advantage" className="border-b border-white/8 bg-coal px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          <div>
            <Reveal>
              <Marker>The Panel Advantage</Marker>
            </Reveal>
            <LineReveal
              className="display mt-8 text-[clamp(2rem,4vw,3.8rem)]"
              lines={[
                "You don't have",
                "to go it alone.",
              ]}
            />
          </div>
          <Reveal delay={80}>
            <p className="text-base leading-relaxed text-mist lg:mt-24 sm:text-lg">
              Some of the best founders we work with aren't the type to cold-pitch podcasts or declare
              themselves a thought leader every day. A panel fixes that.{' '}
              It's the lowest-pressure, highest-return way to start building a public presence.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-16 grid grid-cols-1 gap-px border border-white/8 bg-white/8 md:grid-cols-3">
            {deliverables.map(([title, body], i) => (
              <div key={title} className="bg-coal p-10">
                <div className="mb-6 font-display text-4xl font-extrabold text-white/8">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-base font-extrabold uppercase leading-snug text-white">{title}</h3>
                <p className="mt-4 leading-relaxed text-mist">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  THE METHOD                                                         */
/* ================================================================== */
function Trajectory() {
  const steps = [
    { n: '01', icon: 'compass', title: 'Identify', body: 'We find the right opportunities — the panels and stages where your ideal clients are already in the audience.' },
    { n: '02', icon: 'layers', title: 'Position', body: 'We frame your point of view so it lands: a recognized expert with something worth hearing.' },
    { n: '03', icon: 'target', title: 'Place', body: "We handle the outreach and negotiation. You don't send a single cold email." },
    { n: '04', icon: 'spark', title: 'Compound', body: 'First placements land in 30-90 days. Then it compounds — relationships, credibility, inbound.' },
  ]
  return (
    <section id="method" className="border-b border-white/8 bg-ink px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <Marker>The Method</Marker>
            </Reveal>
            <LineReveal
              className="display mt-8 text-[clamp(2rem,4vw,3.8rem)]"
              lines={["Four moves.", "You just show up."]}
            />
          </div>
          <Reveal delay={80}>
            <p className="max-w-xs text-mist">
              From identification to your first panel, we handle every step.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-16 grid grid-cols-1 gap-px border border-white/8 bg-white/8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => {
              const Glyph = Icon[s.icon]
              return (
                <div key={s.n} className="group bg-coal p-10 transition-colors hover:bg-panel">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-5xl font-extrabold text-white/6 transition-colors group-hover:text-white/12">
                      {s.n}
                    </span>
                    <Glyph className="h-5 w-5 text-brand mt-1" />
                  </div>
                  <h3 className="mt-8 font-display text-base font-extrabold uppercase text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{s.body}</p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  CASE STUDIES                                                       */
/* ================================================================== */
const CASES = [
  {
    vimeoId: '515481140',
    title: 'Lockheed Martin',
    label: 'Fortune 500 · Defense & Aerospace',
    body: 'Placed their leadership on the panels where defense and aerospace decision-makers sit — the credibility that drives partnerships, not press releases.',
  },
  {
    vimeoId: '515482946',
    title: 'ASAE',
    label: 'Association of Association Executives',
    body: 'Got in front of the CEOs who control professional and industry conference lineups across thousands of associations. One relationship, hundreds of stages.',
  },
  {
    vimeoId: '1105421157',
    title: 'Tech Founder — $100M Exit',
    label: 'Enterprise Technology · YourMembership',
    body: 'Booked CEO JP Guilbault at top industry events — driving brand recognition that contributed directly to a $100M+ exit valuation.',
  },
]

function CaseStudies() {
  return (
    <section id="cases" className="border-b border-white/8 bg-coal px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker>Proof It Works</Marker>
        </Reveal>
        <LineReveal
          className="display mt-8 text-[clamp(2rem,4vw,3.8rem)]"
          lines={[
            "Real rooms.",
            <span key="red" className="text-brand">Real outcomes.</span>,
          ]}
        />

        <Reveal delay={80}>
          <blockquote className="mt-14 max-w-4xl">
            <p className="font-display text-[clamp(1.3rem,2.5vw,2.4rem)] font-extrabold uppercase leading-snug text-white">
              "They turned a major industry issue into a whisper."
            </p>
            <footer className="mt-6 flex items-center gap-4">
              <span className="h-px w-8 bg-brand" />
              <cite className="kicker not-italic text-mist">COO, the DC Bar</cite>
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="flex h-full flex-col border border-white/8 bg-ink">
                {c.vimeoId && (
                  <div className="aspect-video w-full overflow-hidden">
                    <iframe
                      src={`https://player.vimeo.com/video/${c.vimeoId}`}
                      className="h-full w-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={c.title}
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-8">
                  {c.label && <span className="kicker mb-3 text-faint">{c.label}</span>}
                  <h3 className="font-display text-lg font-extrabold uppercase leading-snug text-white">{c.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-mist">{c.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  FOUNDERS — full-width alternating, portrait photos               */
/* ================================================================== */
const FOUNDERS = [
  {
    img: adeleImg,
    name: 'Adele Gambardella',
    role: 'Co-Founder · Communications',
    bio: "Co-Founder of The Convincing Company and accomplished author, Adele is a seasoned PR expert who has worked with three billionaires, POTUS, and the highest-paid female executive in corporate America. A regular contributor to The Wall Street Journal and Inc Magazine, she has spoken twice at the United Nations on crisis communications and compelling narratives — helping leaders master the art of persuasion across all platforms.",
    tags: ['Wall Street Journal', 'Inc Magazine', 'United Nations'],
  },
  {
    img: chipImg,
    name: 'Chip Massey',
    role: 'Co-Founder · Persuasion',
    bio: "Co-Founder of The Convincing Company and former FBI Special Agent, Chip spent years as a hostage negotiator mastering high-stakes communication, and was awarded the FBI Director's Award for his exceptional service. Featured in Bloomberg Businessweek, Fast Company, Entrepreneur, and Investor Business Daily, he now applies elite negotiation and influence techniques to help clients achieve breakthrough results in business and beyond.",
    tags: ['Bloomberg Businessweek', 'Fast Company', 'Entrepreneur', "Investor's Business Daily", 'CBS'],
  },
]

/* Only real press photos — no stock */
const CHIP_PRESS = [
  { label: 'Anderson Cooper 360', caption: 'CNN', src: chipAndersonCooper },
  { label: 'NBC', caption: 'National broadcast', src: chipNBC },
  { label: 'CNN OutFront', caption: 'Erin Burnett', src: chipOutfront },
]

function Founders() {
  return (
    <section id="founders" className="border-b border-white/8 bg-ink px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker>Who You're Working With</Marker>
        </Reveal>
        <LineReveal
          className="display mt-8 text-[clamp(2rem,4vw,3.8rem)]"
          lines={[
            "50 years making sure",
            "the right people hear you.",
          ]}
        />

        {/* Full-width alternating founder rows */}
        <div className="mt-20 flex flex-col gap-px border border-white/8">
          {FOUNDERS.map((p, i) => {
            const reversed = i % 2 === 1
            return (
              <Reveal key={p.name} delay={i * 60}>
                <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                  {/* Photo — fills height of the bio column */}
                  <div
                    className={`relative overflow-hidden ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
                    style={{ minHeight: '400px' }}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                    />
                    {/* subtle gradient at bottom of photo */}
                    <div
                      className="absolute inset-x-0 bottom-0 pointer-events-none"
                      style={{ height: '120px', background: 'linear-gradient(to top, rgba(9,9,9,0.6), transparent)' }}
                    />
                  </div>

                  {/* Bio */}
                  <div className={`flex flex-col justify-center bg-coal p-10 sm:p-14 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="label text-brand">{p.role}</span>
                    <h3 className="mt-4 font-display text-[clamp(1.6rem,2.8vw,2.6rem)] font-extrabold uppercase leading-none text-white">
                      {p.name}
                    </h3>
                    <p className="mt-6 leading-relaxed text-mist">{p.bio}</p>
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/8 pt-6">
                      {p.tags.map((t) => (
                        <span key={t} className="kicker text-faint">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Stats bar */}
        <Reveal delay={100}>
          <div className="mt-px grid grid-cols-1 gap-px border-x border-b border-white/8 bg-white/8 sm:grid-cols-3">
            <div className="bg-coal px-10 py-9">
              <div className="font-display text-4xl font-extrabold text-white">197</div>
              <p className="mt-2 text-sm leading-relaxed text-mist">Media placements secured in a single campaign</p>
            </div>
            <div className="bg-coal px-10 py-9">
              <div className="font-display text-4xl font-extrabold text-white">$100M+</div>
              <p className="mt-2 text-sm leading-relaxed text-mist">Exit valuation driven by stage visibility</p>
            </div>
            <div className="bg-coal px-10 py-9">
              <div className="font-display text-sm font-extrabold uppercase tracking-wide text-white">Convince Me</div>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                High-Stakes Negotiation Tactics — Chip Massey's WSJ-featured book
              </p>
            </div>
          </div>
        </Reveal>

        {/* Chip press photos */}
        <div className="mt-20">
          <Reveal>
            <Marker>Chip in the Room</Marker>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CHIP_PRESS.map(({ label, caption, src }, i) => (
              <Reveal key={label} delay={i * 70}>
                <div className="group relative overflow-hidden border border-white/8 aspect-[4/3]">
                  <img
                    src={src}
                    alt={label}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="font-display text-sm font-extrabold uppercase text-white">{label}</div>
                    <div className="kicker mt-1 text-white/55">{caption}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  CHIP IN ACTION — testimonial videos (correctly labeled)           */
/* ================================================================== */
const CHIP_VIDEOS = [
  { vimeoId: '1203891346' },
  { vimeoId: '1203801461' },
]

function ChipInAction() {
  return (
    <section id="chip-action" className="border-b border-white/8 bg-coal px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker>Chip in the Room</Marker>
        </Reveal>
        <LineReveal
          className="display mt-8 text-[clamp(2rem,4vw,3.8rem)]"
          lines={[
            "Watch him make",
            "the case.",
          ]}
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CHIP_VIDEOS.map((p, i) => (
            <Reveal key={p.vimeoId} delay={i * 80}>
              <div className="overflow-hidden border border-white/8 bg-ink">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://player.vimeo.com/video/${p.vimeoId}`}
                    className="h-full w-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`Chip Massey — ${i + 1}`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  FAQ                                                                */
/* ================================================================== */
const FAQ_QS = [
  ["How do you actually get me onto panels? Do you just send emails?", "No. We know how these ecosystems work, who controls the lineups, and how to position a client so the answer is yes — someone who knows the landscape puts you in front of the right person, framed the right way."],
  ["How long until I see results?", "First placements typically happen within 30 to 90 days. The real outcome is what compounds after — six months in, clients tell us it changed how they walk into every room."],
  ["We've done PR before and didn't get much from it.", "Traditional PR measures volume. We measure impact — whether the right people saw you in the right context and shifted how they think about you."],
  ["Is this only for large companies?", "Not at all. What matters isn't the size of the organization — it's the quality of what you have to say and the seriousness of where you want to take it."],
]

function FAQ() {
  return (
    <section id="faq" className="border-b border-white/8 bg-ink px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker>Honest Answers</Marker>
        </Reveal>
        <LineReveal
          className="display mt-8 text-[clamp(2rem,4vw,3.8rem)]"
          lines={[
            "The questions",
            "we get most.",
          ]}
        />
        <Reveal delay={100}>
          <div className="mt-16 grid grid-cols-1 gap-px border border-white/8 bg-white/8 md:grid-cols-2">
            {FAQ_QS.map(([q, a]) => (
              <div key={q} className="bg-coal p-10">
                <h3 className="font-display text-sm font-extrabold uppercase leading-snug text-white">{q}</h3>
                <p className="mt-5 leading-relaxed text-mist">{a}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  CTA — strong close before footer                                  */
/* ================================================================== */
function CTA() {
  return (
    <section className="border-b border-white/8 bg-coal px-6 py-36 sm:px-10 text-center">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="label text-brand">Get started</span>
        </Reveal>
        <LineReveal
          className="display mt-6 text-[clamp(2.4rem,5vw,5rem)]"
          lines={[
            "The panels are",
            "going to someone.",
            <span key="red" className="text-brand">Make it you.</span>,
          ]}
        />
        <Reveal delay={120}>
          <p className="mt-8 text-lg text-mist">
            First placements typically happen in 30–90 days.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <a
            href={BOOK}
            className="group mt-10 inline-flex items-center gap-3 bg-brand px-10 py-5 label text-[0.72rem] tracking-[0.24em] text-white transition-colors hover:bg-brandBright"
          >
            Book a strategy call
            <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  FOOTER                                                             */
/* ================================================================== */
function Footer() {
  return (
    <footer className="bg-ink px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-content flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Logo className="text-base" />
        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href={CASE_STUDIES_URL}
            target="_blank"
            rel="noreferrer"
            className="kicker text-faint transition-colors hover:text-white"
          >
            View more case studies →
          </a>
          <p className="kicker text-faint/60">
            © 2026 The Convincing Company · Panel placement for founders &amp; executives
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ================================================================== */
/*  APP                                                               */
/* ================================================================== */
export default function App() {
  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <FeaturedIn />
        <Pipeline />
        <PanelArchitecture />
        <Trajectory />
        <CaseStudies />
        <Founders />
        <ChipInAction />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
