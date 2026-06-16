import { useState } from 'react'
import {
  Reveal,
  LineReveal,
  Logo,
  Marker,
  Plate,
  StatusBadge,
  FitBar,
  Button,
  Icon,
} from './components/ui.jsx'

/* ================================================================== */
/*  NAV                                                                */
/* ================================================================== */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <nav className="flex items-center justify-between py-5">
          <a href="#top" aria-label="The Convincing Company">
            <Logo className="text-sm leading-[0.8] sm:text-base" />
          </a>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="kicker">Panel Placement</span>
            <span className="text-faint">·</span>
            <span className="kicker text-brand">For Founders &amp; Executives</span>
          </div>
          <a href="#begin" className="label text-[0.65rem] text-white transition-colors hover:text-brand">
            Book a Call →
          </a>
        </nav>
        <div className="h-px w-full bg-white/10" />
      </div>
    </header>
  )
}

/* ================================================================== */
/*  HERO — FOR FOUNDERS & EXECUTIVES                                    */
/* ================================================================== */
const PRESS = [
  { name: 'WSJ', cls: 'font-serif text-3xl font-bold tracking-tight' },
  { name: 'Inc.', cls: 'font-display text-3xl font-black tracking-tight' },
  { name: 'Fast Company', cls: 'font-display text-xl font-extrabold uppercase tracking-tight' },
  { name: 'CBS', cls: 'font-display text-3xl font-black tracking-tight' },
]

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20 sm:px-10">

      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />
      {/* Overlay: solid on left for text, fades to transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-content">
        <div className="grid items-start gap-16 lg:grid-cols-12">

          {/* ── Left column ── */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-brand/60" />
                <span className="label text-brand">For Founders &amp; Executives</span>
              </div>
            </Reveal>

            <LineReveal
              className="display mt-10 text-[clamp(3rem,10vw,9.5rem)]"
              lines={[
                <>You've earned the credibility.</>,
                <span className="text-brand">The market just hasn't heard it.</span>,
              ]}
            />

            {/* Video placeholder */}
            <Reveal delay={100}>
              <div className="mt-12 max-w-2xl">
                <div className="group relative aspect-video w-full cursor-pointer overflow-hidden border border-white/15 bg-panel/60 backdrop-blur-sm transition-colors hover:border-brand/50">
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-brand text-black transition-transform duration-300 group-hover:scale-110">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                  <span className="absolute left-4 top-4 kicker text-white/40">[ video ]</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
                The panels, the stages, the press are going to people no better than you —{' '}
                <span className="text-white">just more visible.</span> We put you in those rooms
                instead.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="#begin">
                  Book a strategy call <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="#founders" variant="outline">
                  Meet Adele &amp; Chip
                </Button>
              </div>

              {/* Press / publications */}
              <div className="mt-14">
                <p className="kicker mb-6">As Featured In</p>
                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 text-white/75">
                  {PRESS.map((p) => (
                    <span key={p.name} className={`${p.cls} transition-colors hover:text-white`}>
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right column — proof card ── */}
          <Reveal className="lg:col-span-5 lg:mt-12" delay={200}>
            <div className="border border-white/10 bg-ink/70 p-8 backdrop-blur-md">
              <p className="label text-brand mb-7">Why It Compounds</p>
              <dl className="grid grid-cols-1 gap-px bg-white/10">
                {[
                  ['30–90d', 'To your first placement'],
                  ['50+ yrs', 'In the highest-stakes rooms'],
                  ['100%', 'Done-for-you'],
                ].map(([big, label]) => (
                  <div key={label} className="bg-panel px-5 py-7">
                    <dt className="font-display text-4xl font-extrabold text-white">{big}</dt>
                    <dd className="kicker mt-3 leading-snug">{label}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="kicker">
                  Latest ·{' '}
                  <span className="text-accept">DC Bar — a major issue, turned into a whisper</span>
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}


/* ================================================================== */
/*  FOUNDERS — § 02 THE OPERATORS                                       */
/* ================================================================== */
function Founders() {
  const people = [
    {
      initials: 'AG',
      name: 'Adele Gambardella',
      role: 'Co-Founder · Communications',
      body:
        'A career in the highest-stakes communications environments on the planet — advising three billionaires, POTUS, and the highest-paid female executive in corporate America. Spoke at the United Nations on crisis communications. Twice.',
    },
    {
      initials: 'CM',
      name: 'Chip Massey',
      role: 'Co-Founder · Persuasion',
      body:
        'Former FBI Special Agent, decorated hostage negotiator, and recipient of the FBI Director’s Award. An expert in making sure the right people hear the right message at exactly the right moment.',
    },
  ]
  return (
    <section id="founders" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker n="02 — The Operators">Who You're Working With</Marker>
        </Reveal>

        <LineReveal
          className="display mt-10 text-[clamp(2.2rem,6vw,5rem)]"
          lines={[<>50 years making sure</>, <span className="text-brand">the right people hear you.</span>]}
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {people.map((p, i) => (
            <Reveal key={p.initials} delay={i * 100}>
              <div className="flex h-full flex-col border border-white/10 bg-panel p-8 sm:p-10">
                <div className="flex items-center gap-5">
                  <span className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-full border border-brand/50 font-display text-lg font-bold text-brand">
                    {p.initials}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold uppercase leading-tight">{p.name}</h3>
                    <span className="kicker mt-2 block text-brand">{p.role}</span>
                  </div>
                </div>
                <p className="mt-7 leading-relaxed text-mist">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="display mt-12 max-w-4xl text-[clamp(1.3rem,2.8vw,2.1rem)] text-mist">
            Together they founded The Convincing Company — over 50 years making sure the right people
            hear the right message at exactly the <span className="text-white">right moment.</span>
          </p>
        </Reveal>

        {/* Proof strip */}
        <Reveal delay={180}>
          <div className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-white/10 pt-8">
            {[
              ['Lockheed Martin → Meta', 'Trusted across industries'],
              ['United Nations', 'Crisis communications · ×2'],
              ['POTUS · 3 billionaires', 'Counsel at the top'],
            ].map(([big, label]) => (
              <div key={label}>
                <div className="font-display text-xl font-extrabold text-white">{big}</div>
                <div className="kicker mt-2">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  THE ROOMS — § 03                                                    */
/* ================================================================== */
const CONFERENCES = [
  { mono: 'AI', name: 'Aspen Ideas Festival', when: 'Jun 2026', size: '3,400 attendees', score: 9, status: 'accepted' },
  { mono: 'MG', name: 'Milken Global', when: 'May 2026', size: '5,000 attendees', score: 9, status: 'accepted' },
  { mono: 'WE', name: 'World Economic Forum · Davos', when: 'Jan 2027', size: '2,800 attendees', score: 8, status: 'submitted' },
  { mono: 'TN', name: 'TED Next', when: 'Oct 2026', size: '1,800 attendees', score: 8, status: 'submitted' },
  { mono: 'SB', name: 'South by Southwest', when: 'Mar 2027', size: '12,000 attendees', score: 7, status: 'submitted' },
  { mono: 'WS', name: 'Web Summit · Lisbon', when: 'Nov 2026', size: '70,000 attendees', score: 7, status: 'researching' },
  { mono: 'FM', name: 'Fortune Most Powerful Women', when: 'Oct 2026', size: '500 attendees', score: 8, status: 'researching' },
  { mono: 'CL', name: 'Cannes Lions', when: 'Jun 2027', size: '15,000 attendees', score: null, status: 'researching' },
]

function Pipeline() {
  return (
    <section id="pipeline" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker n="03 — The Rooms">The Board</Marker>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <LineReveal
            className="display max-w-3xl text-[clamp(2.2rem,6vw,5rem)]"
            lines={[<>You don't get there by</>, <span className="text-brand">blasting outreach into a void.</span>]}
          />
          <Reveal delay={120}>
            <div className="flex gap-6">
              {[
                ['accepted', 'Accepted'],
                ['submitted', 'Submitted'],
                ['researching', 'Researching'],
              ].map(([s, l]) => (
                <span key={s} className="flex items-center gap-2">
                  <StatusBadge status={s} />
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-mist sm:text-xl">
            We know how these ecosystems work, who controls the lineups, and how to position you so
            the answer is yes. We map the rooms where your buyers are already sitting — then put you
            in front of the right person, <span className="text-white">framed the right way.</span>
          </p>
        </Reveal>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {CONFERENCES.map((c, i) => (
            <Reveal key={c.mono} delay={(i % 4) * 70} className="contents">
              <article className="group flex flex-col gap-7 bg-ink p-7 transition-colors duration-300 hover:bg-panel">
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center border border-white/15 font-display text-sm font-bold text-mist transition-colors group-hover:border-brand group-hover:text-brand">
                    {c.mono}
                  </span>
                  <StatusBadge status={c.status} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-extrabold uppercase leading-tight">{c.name}</h3>
                  <p className="kicker mt-3">
                    {c.when} · {c.size}
                  </p>
                </div>
                <FitBar score={c.score} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  THE LOW-PRESSURE ADVANTAGE — § 04                                   */
/* ================================================================== */
function PanelArchitecture() {
  const deliverables = [
    ['01', 'You’re not alone on stage', 'It’s a conversation — someone asking you questions you already know the answers to. No keynote to memorize.'],
    ['02', 'No spotlight to carry', 'You just show up as the expert you already are, and the audience draws its own conclusions.'],
    ['03', 'The doors compound', 'Once you’ve done a few, the relationships, credibility and inbound start to stack on their own.'],
  ]
  const cast = [
    { initials: 'YOU', role: 'The Expert', sub: 'You', anchor: true },
    { initials: 'TS', role: 'The Skeptic', sub: 'Creates tension' },
    { initials: 'OP', role: 'The Operator', sub: 'Adds proof' },
    { initials: 'MD', role: 'Moderator', sub: 'Keeps the line hot' },
  ]
  return (
    <section id="architecture" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker n="04 — The Panel Advantage">The Product</Marker>
        </Reveal>

        <LineReveal
          className="display mt-10 text-[clamp(2.6rem,8vw,7rem)]"
          lines={[<>You don't have</>, <>to go it alone.</>]}
        />

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-mist sm:text-xl">
            Some of the best founders we work with aren't the type to cold-pitch podcasts or declare
            themselves a thought leader on LinkedIn every day.{' '}
            <span className="text-brand">A panel fixes that.</span> It's the lowest-pressure,
            highest-return way to start building a public presence.
          </p>
        </Reveal>

        {/* Deliverables */}
        <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {deliverables.map(([n, title, body], i) => (
            <Reveal key={n} delay={i * 90} className="contents">
              <div className="bg-ink p-8">
                <span className="label text-brand">Why Panels {n}</span>
                <h3 className="mt-5 font-display text-xl font-extrabold uppercase">{title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Figure + finished pitch */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Composed panel diagram */}
          <Reveal>
            <span className="kicker text-brand">Figure 01 · The panel we put you on</span>
            <div className="mt-5 border border-white/10 p-8 sm:p-12">
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
                {cast.map((m) => (
                  <div key={m.initials} className="flex flex-col items-center text-center">
                    <span
                      className={`grid h-16 w-16 place-items-center rounded-full font-display text-sm font-bold ${
                        m.anchor
                          ? 'bg-brand text-black'
                          : 'border border-white/25 text-mist'
                      }`}
                    >
                      {m.initials}
                    </span>
                    <span className="label mt-4 text-[0.6rem] text-white">{m.role}</span>
                    <span className="kicker mt-1.5">{m.sub}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 border-t border-white/10 pt-5">
                <p className="kicker">A recognized expert · With a point of view worth hearing</p>
              </div>
            </div>
          </Reveal>

          {/* Finished pitch */}
          <Reveal delay={120}>
            <span className="kicker text-brand">The seat we secure for you</span>
            <div className="mt-5 flex h-[calc(100%-2rem)] flex-col justify-between border border-white/10 bg-panel p-8 sm:p-12">
              <div>
                <span className="label text-brand">Panel Placement</span>
                <p className="display mt-6 text-[clamp(1.6rem,3.2vw,2.6rem)]">
                  “Not a last-minute fill-in — a recognized expert the room came to hear.”
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
                <span className="kicker">Format · Panel</span>
                <span className="kicker">Pressure · Low</span>
                <span className="kicker text-accept">Return · Compounds</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  THE METHOD — § 05                                                   */
/* ================================================================== */
function Trajectory() {
  const steps = [
    { n: '01', icon: 'compass', title: 'Identify', body: 'We find the right opportunities — the panels and stages where your ideal clients and partners are already in the audience.' },
    { n: '02', icon: 'layers', title: 'Position', body: 'We frame your point of view so it lands: a recognized expert with something worth hearing, not another name on a roster.' },
    { n: '03', icon: 'target', title: 'Place', body: 'We handle the outreach and negotiation. You don’t send a single cold email or pitch a single podcast.' },
    { n: '04', icon: 'spark', title: 'Compound', body: 'First placements land in 30–90 days. Then it compounds — relationships, credibility, and inbound that grows every time.' },
  ]
  return (
    <section id="method" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker n="05 — The Method">The System</Marker>
        </Reveal>
        <LineReveal
          className="display mt-10 text-[clamp(2.2rem,6vw,5rem)]"
          lines={[<>Four moves.</>, <span className="text-brand">You just show up.</span>]}
        />
        <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Glyph = Icon[s.icon]
            return (
              <Reveal key={s.n} delay={i * 80} className="contents">
                <div className="group bg-ink p-8 transition-colors hover:bg-panel">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl font-extrabold text-white/10 transition-colors group-hover:text-brand/30">
                      {s.n}
                    </span>
                    <Glyph className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-extrabold uppercase">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{s.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  FAQ — § 06 HONEST ANSWERS                                           */
/* ================================================================== */
function FAQ() {
  const qs = [
    {
      q: 'How do you actually get me onto panels? Do you just send emails?',
      a: 'No. We know how these ecosystems work, who controls the lineups, and how to position a client so the answer is yes. You get there because someone who knows the landscape puts you in front of the right person, framed the right way.',
    },
    {
      q: 'How long until I see results?',
      a: 'First placements typically happen within 30 to 90 days. But the real outcome is what compounds after — six months in, clients tell us it changed how they walk into every room and what gets offered to them without asking.',
    },
    {
      q: 'We’ve done PR before and didn’t get much from it.',
      a: 'Traditional PR measures volume. We measure impact — whether the right people saw you in the right context and shifted how they think about you. That’s a different goal, and it produces different results.',
    },
    {
      q: 'Is this only for large companies?',
      a: 'Not at all. What matters isn’t the size of the organization — it’s the quality of what you have to say and the seriousness of where you want to take it.',
    },
  ]
  return (
    <section id="faq" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker n="06 — Honest Answers">The Questions</Marker>
        </Reveal>
        <LineReveal
          className="display mt-10 text-[clamp(2.2rem,6vw,5rem)]"
          lines={[<>The questions</>, <span className="text-brand">we get most.</span>]}
        />
        <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {qs.map((item, i) => (
            <Reveal key={i} delay={(i % 2) * 90} className="contents">
              <div className="bg-ink p-8 sm:p-10">
                <h3 className="font-display text-lg font-extrabold uppercase leading-snug text-white">
                  {item.q}
                </h3>
                <p className="mt-4 leading-relaxed text-mist">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  CTA — § 07 BEGIN                                                    */
/* ================================================================== */
function CTA() {
  const [sent, setSent] = useState(false)
  return (
    <section id="begin" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker n="07 — Begin">The Invitation</Marker>
        </Reveal>
        <div className="mt-10 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <LineReveal
              className="display text-[clamp(2.6rem,8vw,7rem)]"
              lines={[<>Conference season</>, <span className="text-brand">doesn't wait.</span>]}
            />
            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
                Lineups for the most important stages in your industry are being finalized right now.
                The executives getting on those panels aren't smarter than you — they just moved
                first. On a call, we won't pitch you. We'll ask questions, and tell you honestly
                whether we're the right people to go get it for you.
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5" delay={140}>
            {sent ? (
              <div className="flex h-full flex-col justify-center border border-white/10 p-10">
                <span className="grid h-12 w-12 place-items-center bg-brand text-black">
                  <Icon.check className="h-6 w-6" />
                </span>
                <p className="display mt-6 text-2xl">Received.</p>
                <p className="mt-3 text-mist">
                  We'll reply within one business day to set up your call.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="space-y-px border border-white/10 bg-white/10"
              >
                {[
                  { ph: 'Your name', type: 'text' },
                  { ph: 'Company / title', type: 'text' },
                  { ph: 'Work email', type: 'email' },
                ].map((f) => (
                  <input
                    key={f.ph}
                    required
                    type={f.type}
                    placeholder={f.ph}
                    className="w-full bg-ink px-6 py-5 text-sm outline-none placeholder:text-faint focus:bg-panel"
                  />
                ))}
                <textarea
                  rows={3}
                  placeholder="In one line — what do you want to be known for?"
                  className="w-full resize-none bg-ink px-6 py-5 text-sm outline-none placeholder:text-faint focus:bg-panel"
                />
                <button
                  type="submit"
                  className="group flex w-full items-center justify-between bg-brand px-6 py-5 label text-[0.7rem] tracking-[0.2em] text-black transition-colors hover:bg-brandBright"
                >
                  Book your call
                  <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  FOOTER                                                              */
/* ================================================================== */
function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-content flex-col justify-between gap-12 md:flex-row md:items-end">
        <Logo tagline className="text-xl" />
        <div className="flex flex-col gap-6 md:items-end">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              ['Founders', '#founders'],
              ['The Rooms', '#pipeline'],
              ['The Advantage', '#architecture'],
              ['Method', '#method'],
              ['Questions', '#faq'],
              ['Begin', '#begin'],
            ].map(([l, h]) => (
              <a key={h} href={h} className="kicker transition-colors hover:text-brand">
                {l}
              </a>
            ))}
          </nav>
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
        <Founders />
        <Pipeline />
        <PanelArchitecture />
        <Trajectory />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
