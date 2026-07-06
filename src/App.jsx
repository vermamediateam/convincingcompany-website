import { useState } from 'react'
import {
  Reveal,
  LineReveal,
  Logo,
  Marker,
  Plate,
  Button,
  Icon,
} from './components/ui.jsx'
import adeleImg from './assets/adele.jpg'
import chipImg from './assets/chip.jpg'

/* ================================================================== */
/*  SHARED                                                             */
/* ================================================================== */
const BOOK = 'mailto:adele@convincingcompany.com?subject=Strategy%20Call%20Request'
const CASE_STUDIES_URL = 'https://convincingcompany.com/case-studies/'

const HERO_BG = 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1920&q=80'

const STAGE_IMGS = [
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=75',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=75',
  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=75',
  'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=75',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=75',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=75',
  'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=75',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=75',
]

const ADELE_IMG = adeleImg
const CHIP_IMG = chipImg

const PRESS = [
  { name: 'WSJ', cls: 'font-serif text-2xl font-bold tracking-tight' },
  { name: 'Inc.', cls: 'font-display text-2xl font-black tracking-tight' },
  { name: 'Fast Company', cls: 'font-display text-base font-extrabold uppercase tracking-tight' },
  { name: 'CBS', cls: 'font-display text-2xl font-black tracking-tight' },
  { name: 'Bloomberg', cls: 'font-display text-xl font-extrabold uppercase tracking-tight' },
  { name: 'Entrepreneur', cls: 'font-display text-base font-extrabold uppercase tracking-tight' },
  { name: 'Investor\'s Business Daily', cls: 'font-display text-xs font-extrabold uppercase tracking-[0.12em]' },
]

/* ================================================================== */
/*  NAV                                                                */
/* ================================================================== */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <nav className="flex items-center justify-between gap-3 py-4">
          <a href="#top" aria-label="The Convincing Company" className="min-w-0">
            <Logo className="text-sm leading-none sm:text-lg" />
          </a>
          <div className="hidden items-center gap-2 lg:flex">
            <span className="kicker">Panel Placement</span>
            <span className="text-faint">·</span>
            <span className="kicker text-brand">For Founders &amp; Executives</span>
          </div>
          <a
            href={BOOK}
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap bg-brand px-4 py-2 label text-[0.6rem] text-white transition-colors hover:bg-brandBright sm:px-5 sm:py-2.5 sm:text-[0.65rem]"
          >
            Book a Call →
          </a>
        </nav>
        <div className="h-px w-full bg-white/10" />
      </div>
    </header>
  )
}

/* ================================================================== */
/*  HERO                                                               */
/* ================================================================== */
function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-24 sm:px-10">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url('${HERO_BG}')`, backgroundSize: 'cover', backgroundPosition: 'center 30%' }}
      />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/80" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-brand/60" />
            <span className="label text-brand">For Founders &amp; Executives</span>
            <span className="h-px w-10 bg-brand/60" />
          </div>
        </Reveal>

        <LineReveal
          className="display mx-auto mt-8 max-w-3xl text-[clamp(1.9rem,4.8vw,3.9rem)]"
          lines={[
            <>You've earned the credibility.</>,
            <span className="text-brand">The market just hasn't heard it.</span>,
          ]}
        />

        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            The panels, the stages, the press are going to people no better than you —{' '}
            <span className="text-white">just more visible.</span> We put you in those rooms instead.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={BOOK}>
              Book a strategy call <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#founders" variant="outline">
              Meet Adele &amp; Chip
            </Button>
          </div>

          <p className="kicker mb-6 mt-14">As Featured In</p>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div
              className="flex w-max gap-x-14 text-white/60"
              style={{ animation: 'marquee 22s linear infinite' }}
            >
              {[...PRESS, ...PRESS].map((p, i) => (
                <span key={i} className={p.cls}>{p.name}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  THE ROOMS — stage tiles (grayscale → colour on hover)              */
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
    <section id="rooms" className="border-t border-white/10 bg-coal px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker>The Rooms</Marker>
        </Reveal>
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <LineReveal
            className="display max-w-3xl text-[clamp(1.8rem,4vw,3.25rem)]"
            lines={[<>You don't get there by</>, <span className="text-brand">blasting outreach into a void.</span>]}
          />
          <Reveal delay={120}>
            <p className="max-w-md text-mist">
              We know how these ecosystems work, who controls the lineups, and how to position you so the
              answer is yes — then put you in the rooms where your buyers already sit.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONFERENCES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 70}>
              <article className="group relative overflow-hidden border border-white/10">
                <img
                  src={STAGE_IMGS[i % STAGE_IMGS.length]}
                  alt={c.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent transition-opacity duration-500 group-hover:from-ink/90" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-base font-extrabold uppercase leading-tight text-white">
                    {c.name}
                  </h3>
                  <p className="kicker mt-1.5">{c.when} · {c.size}</p>
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
/*  THE PANEL ADVANTAGE                                                 */
/* ================================================================== */
function PanelArchitecture() {
  const deliverables = [
    ['You’re not alone on stage', 'It’s a conversation — someone asking you questions you already know the answers to. No keynote to memorize.'],
    ['No spotlight to carry', 'You just show up as the expert you already are, and the audience draws its own conclusions.'],
    ['The doors compound', 'Once you’ve done a few, the relationships, credibility and inbound start to stack on their own.'],
  ]
  return (
    <section id="advantage" className="border-t border-white/10 bg-panel px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker>The Panel Advantage</Marker>
        </Reveal>
        <LineReveal
          className="display mt-8 text-[clamp(1.8rem,4vw,3.25rem)]"
          lines={[<>You don't have to go it alone.</>]}
        />
        <Reveal delay={120}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-mist sm:text-lg">
            Some of the best founders we work with aren't the type to cold-pitch podcasts or declare
            themselves a thought leader every day. <span className="text-brand">A panel fixes that.</span>{' '}
            It's the lowest-pressure, highest-return way to start building a public presence.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {deliverables.map(([title, body]) => (
              <div key={title} className="bg-ink p-8">
                <h3 className="font-display text-lg font-extrabold uppercase leading-snug">{title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  THE METHOD                                                          */
/* ================================================================== */
function Trajectory() {
  const steps = [
    { n: '01', icon: 'compass', title: 'Identify', body: 'We find the right opportunities — the panels and stages where your ideal clients are already in the audience.' },
    { n: '02', icon: 'layers', title: 'Position', body: 'We frame your point of view so it lands: a recognized expert with something worth hearing.' },
    { n: '03', icon: 'target', title: 'Place', body: 'We handle the outreach and negotiation. You don’t send a single cold email.' },
    { n: '04', icon: 'spark', title: 'Compound', body: 'First placements land in 30–90 days. Then it compounds — relationships, credibility, inbound.' },
  ]
  return (
    <section id="method" className="border-t border-white/10 bg-coal px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker>The Method</Marker>
        </Reveal>
        <LineReveal
          className="display mt-8 text-[clamp(1.8rem,4vw,3.25rem)]"
          lines={[<>Four moves. <span className="text-brand">You just show up.</span></>]}
        />
        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => {
            const Glyph = Icon[s.icon]
            return (
              <div key={s.n} className="group bg-ink p-8 transition-colors hover:bg-panel">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-extrabold text-white/10 transition-colors group-hover:text-brand/40">
                    {s.n}
                  </span>
                  <Glyph className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mt-6 font-display text-lg font-extrabold uppercase">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{s.body}</p>
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
/*  CASE STUDIES — real imagery from convincingcompany.com             */
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
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=75',
    title: 'Tech Founder — $100M Exit',
    label: 'Enterprise Technology',
    body: 'After a nine-figure exit, turned a track record into a speaking presence — board rooms, investor stages, and the rooms that shape the next chapter.',
  },
]

function CaseStudies() {
  return (
    <section id="cases" className="border-t border-white/10 bg-panel px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker>Proof It Works</Marker>
        </Reveal>
        <LineReveal
          className="display mt-8 text-[clamp(1.8rem,4vw,3.25rem)]"
          lines={[<>Real rooms. <span className="text-brand">Real outcomes.</span></>]}
        />
        <Reveal delay={100}>
          <blockquote className="mt-8 max-w-3xl border-l-2 border-brand pl-6 font-display text-xl font-bold uppercase leading-snug sm:text-2xl">
            “They turned a major industry issue into a whisper.”
            <span className="mt-3 block font-sans text-sm font-medium normal-case tracking-wide text-mist">
              — COO, the DC Bar
            </span>
          </blockquote>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="flex h-full flex-col border border-white/10 bg-ink">
                {c.vimeoId ? (
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
                ) : (
                  <Plate ratio="aspect-[16/10]" src={c.img} label="" caption="" className="[&_figcaption]:hidden" />
                )}
                <div className="flex flex-1 flex-col p-7">
                  {c.label && <span className="kicker mb-2 text-brand">{c.label}</span>}
                  <h3 className="font-display text-lg font-extrabold uppercase leading-snug">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{c.body}</p>
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
/*  FOUNDERS — clickable bios + photos with grayscale → colour hover    */
/* ================================================================== */
const FOUNDERS = [
  {
    img: ADELE_IMG,
    name: 'Adele Gambardella',
    role: 'Co-Founder · Communications',
    teaser: 'Seasoned PR expert, author, and counsel to leaders at the very top.',
    bio: 'Co-Founder of The Convincing Company and accomplished author, Adele is a seasoned PR expert who has worked with three billionaires, POTUS, and the highest-paid female executive in corporate America. A regular contributor to The Wall Street Journal and Inc Magazine, she has spoken twice at the United Nations on crisis communications and compelling narratives — helping leaders master the art of persuasion across all platforms.',
    tags: ['Wall Street Journal', 'Inc Magazine', 'United Nations'],
  },
  {
    img: CHIP_IMG,
    name: ‘Chip Massey’,
    role: ‘Co-Founder · Persuasion’,
    teaser: ‘Former FBI Special Agent and decorated hostage negotiator.’,
    bio: ‘Co-Founder of The Convincing Company and former FBI Special Agent, Chip spent years as a hostage negotiator mastering high-stakes communication, and was awarded the FBI Director’s Award for his exceptional service. Featured in Bloomberg Businessweek, Fast Company, Entrepreneur, and Investor Business Daily, one editor noted that “he can talk any executive off a ledge.” He now applies these elite negotiation and influence techniques to help clients achieve breakthrough results in business and beyond.’,
    tags: [‘Bloomberg Businessweek’, ‘Fast Company’, ‘Entrepreneur’, ‘Investor\’s Business Daily’, ‘CBS’],
  },
]

const EVENTS = [
  ['Keynote', 'Main stage', 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=700&q=75'],
  ['Panel', 'Industry summit', 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=700&q=75'],
  ['Fireside', 'Leadership forum', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=75'],
  ['Press', 'Featured coverage', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=75'],
]

function BioModal({ person, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 grid max-h-[90vh] w-full max-w-3xl grid-cols-1 overflow-hidden border border-white/15 bg-coal md:grid-cols-[2fr_3fr]">
        <div className="hidden md:block">
          <img src={person.img} alt={person.name} className="h-full w-full object-cover object-center grayscale" />
        </div>
        <div className="relative overflow-y-auto p-8 sm:p-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-8 w-8 place-items-center text-lg text-mist transition-colors hover:text-white"
          >
            ✕
          </button>
          <span className="label text-brand">Co-Founder</span>
          <h3 className="mt-3 font-display text-2xl font-extrabold uppercase leading-none sm:text-3xl">{person.name}</h3>
          <p className="mt-6 leading-relaxed text-mist">{person.bio}</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5">
            {person.tags.map((t) => (
              <span key={t} className="kicker">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Founders() {
  const [open, setOpen] = useState(null)
  return (
    <section id="founders" className="border-t border-white/10 bg-coal px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker>Who You're Working With</Marker>
        </Reveal>
        <LineReveal
          className="display mt-8 text-[clamp(1.8rem,4vw,3.25rem)]"
          lines={[<>50 years making sure</>, <span className="text-brand">the right people hear you.</span>]}
        />

        <div className="mx-auto mt-12 grid max-w-lg gap-6 sm:grid-cols-2">
          {FOUNDERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group mx-auto flex h-full w-full max-w-[260px] flex-col border border-white/10 bg-ink p-5 text-left transition-colors hover:border-brand/40"
              >
                <Plate ratio="aspect-[4/5]" src={p.img} />
                <h3 className="mt-5 font-display text-lg font-extrabold uppercase leading-tight">{p.name}</h3>
                <span className="kicker mt-2 block text-brand">{p.role}</span>
                <p className="mt-3 text-sm leading-relaxed text-mist">{p.teaser}</p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="kicker text-white/40">{t}</span>
                  ))}
                </div>
                <span className="label mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.6rem] text-brand transition-all group-hover:gap-3">
                  Read bio <span aria-hidden>→</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="display mx-auto mt-14 max-w-3xl text-center text-[clamp(1.1rem,2.2vw,1.7rem)] text-mist">
            Together they founded The Convincing Company — over 50 years making sure the right people hear
            the right message at exactly the <span className="text-white">right moment.</span>
          </p>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <span className="label text-brand">On the stages that matter</span>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {EVENTS.map(([label, caption], i) => (
              <Reveal key={label} delay={i * 70}>
                <Plate ratio="aspect-[4/5]" icon="image" label={label} caption={caption} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {open !== null && <BioModal person={FOUNDERS[open]} onClose={() => setOpen(null)} />}
    </section>
  )
}

/* ================================================================== */
/*  SOCIAL PROOF — Chip testimonial videos                             */
/* ================================================================== */
const CHIP_PROOFS = [
  { vimeoId: '1203891346' },
  { vimeoId: '1203801461' },
]

function SocialProof() {
  return (
    <section id="social-proof" className="border-t border-white/10 bg-panel px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker>What Clients Say</Marker>
        </Reveal>
        <LineReveal
          className="display mt-8 text-[clamp(1.8rem,4vw,3.25rem)]"
          lines={[<>Hear it from the</>, <span className="text-brand">people in the room.</span>]}
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CHIP_PROOFS.map((p, i) => (
            <Reveal key={p.vimeoId} delay={i * 90}>
              <div className="border border-white/10 bg-ink overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://player.vimeo.com/video/${p.vimeoId}`}
                    className="h-full w-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`Client testimonial ${i + 1}`}
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
/*  FAQ                                                                 */
/* ================================================================== */
function FAQ() {
  const qs = [
    ['How do you actually get me onto panels? Do you just send emails?', 'No. We know how these ecosystems work, who controls the lineups, and how to position a client so the answer is yes — someone who knows the landscape puts you in front of the right person, framed the right way.'],
    ['How long until I see results?', 'First placements typically happen within 30 to 90 days. The real outcome is what compounds after — six months in, clients tell us it changed how they walk into every room.'],
    ['We’ve done PR before and didn’t get much from it.', 'Traditional PR measures volume. We measure impact — whether the right people saw you in the right context and shifted how they think about you.'],
    ['Is this only for large companies?', 'Not at all. What matters isn’t the size of the organization — it’s the quality of what you have to say and the seriousness of where you want to take it.'],
  ]
  return (
    <section id="faq" className="border-t border-white/10 bg-panel px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker>Honest Answers</Marker>
        </Reveal>
        <LineReveal
          className="display mt-8 text-[clamp(1.8rem,4vw,3.25rem)]"
          lines={[<>The questions <span className="text-brand">we get most.</span></>]}
        />
        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {qs.map(([q, a]) => (
              <div key={q} className="bg-ink p-8 sm:p-10">
                <h3 className="font-display text-base font-extrabold uppercase leading-snug text-white">{q}</h3>
                <p className="mt-4 leading-relaxed text-mist">{a}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  FOOTER — case studies CTA + copyright                              */
/* ================================================================== */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-content text-center">
        <Logo className="mx-auto text-2xl" />
        <p className="mx-auto mt-8 max-w-xl leading-relaxed text-mist">
          Click below to see more of our case studies.
        </p>
        <a
          href={CASE_STUDIES_URL}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex items-center gap-2 bg-brand px-7 py-4 label text-[0.7rem] text-white transition-colors hover:bg-brandBright"
        >
          View more case studies
          <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="kicker text-faint">© 2026 The Convincing Company · Panel placement for founders &amp; executives</p>
        </div>
      </div>
    </footer>
  )
}

/* ================================================================== */
/*  APP                                                                */
/* ================================================================== */
export default function App() {
  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <Pipeline />
        <PanelArchitecture />
        <Trajectory />
        <CaseStudies />
        <Founders />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
