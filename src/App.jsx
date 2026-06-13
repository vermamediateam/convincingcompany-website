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
            <span className="kicker">Speaker Strategy in Motion</span>
            <span className="text-faint">·</span>
            <span className="kicker text-brand">A Walkthrough</span>
          </div>
          <a href="#begin" className="label text-[0.65rem] text-white transition-colors hover:text-brand">
            Begin →
          </a>
        </nav>
        <div className="h-px w-full bg-white/10" />
      </div>
    </header>
  )
}

/* ================================================================== */
/*  HERO — MANIFESTO 01                                                 */
/* ================================================================== */
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
        <div className="grid items-center gap-16 lg:grid-cols-12">

          {/* ── Left column ── */}
          <div className="lg:col-span-7">
            <Reveal>
              <Marker n="01">A Manifesto</Marker>
            </Reveal>

            <LineReveal
              className="display mt-10 text-[clamp(2.6rem,9vw,8.5rem)]"
              lines={[
                <>Most firms book dates.</>,
                <span className="text-brand">We build trajectories.</span>,
              ]}
            />

            <Reveal delay={120}>
              <p className="mt-12 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
                The Convincing Company is an investor-relations and speaker-strategy firm. We don't
                chase open slots or pad a calendar. We engineer the arc that turns a capable operator
                into <span className="text-white">the voice their market quotes</span> — one
                architected stage at a time.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="#begin">
                  Start a trajectory <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="#client" variant="outline">
                  See the walkthrough
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ── Right column — stats card ── */}
          <Reveal className="lg:col-span-5" delay={200}>
            <div className="border border-white/10 bg-ink/70 p-8 backdrop-blur-md">
              <p className="label text-brand mb-7">Current Pipeline</p>
              <dl className="grid grid-cols-1 gap-px bg-white/10">
                {[
                  ['11', 'Stages architected / yr'],
                  ['9.1', 'Avg. fit score booked'],
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
                  <span className="text-accept">Revenue Leaders Summit — Panel confirmed</span>
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
/*  SAMPLE CLIENT — § 01 THE TRENDSETTER                               */
/* ================================================================== */
function SampleClient() {
  const frameworks = ['The Conviction Loop', 'Decision Velocity', 'The Permission Doctrine']
  return (
    <section id="client" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker n="01 — The Trendsetter">A Profile</Marker>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* Portrait plate */}
          <Reveal className="lg:col-span-5" delay={80}>
            <Plate
              ratio="aspect-[3/4]"
              icon="user"
              label="Plate I"
              caption="Photograph · Studio Session, 2026"
            />
          </Reveal>

          {/* Right column */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="display text-[clamp(3rem,8vw,7rem)]">Sample Client</h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-7 grid grid-cols-2 gap-4">
                <Plate ratio="aspect-[4/5]" icon="mic" label="Aspen Forum" caption="Keynote" />
                <Plate ratio="aspect-[4/5]" icon="mic" label="Milken Summit" caption="Panel" />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <p className="display mt-8 text-[clamp(1.4rem,3vw,2.4rem)] text-mist">
                The voice redefining
                <br className="hidden sm:block" /> high-stakes leadership.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9">
                <span className="label text-brand">Signature Frameworks</span>
                <div className="mt-4 flex flex-wrap gap-3">
                  {frameworks.map((f) => (
                    <span
                      key={f}
                      className="border border-white/15 px-5 py-3 font-display text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8">
                {[
                  ['$240M', 'Capital influenced from stage'],
                  ['18', 'Inbound conversations / appearance'],
                  ['4', 'Headline panels owned'],
                ].map(([big, label]) => (
                  <div key={label}>
                    <div className="font-display text-3xl font-extrabold text-white">{big}</div>
                    <div className="kicker mt-2">{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  CONFERENCE PIPELINE — § 02                                          */
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
          <Marker n="02 — The Pipeline">The Board</Marker>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <LineReveal
            className="display max-w-3xl text-[clamp(2.2rem,6vw,5rem)]"
            lines={[<>We don't pitch conferences.</>, <span className="text-brand">We architect them.</span>]}
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
/*  PANEL ARCHITECTURE — § 03                                           */
/* ================================================================== */
function PanelArchitecture() {
  const deliverables = [
    ['01', 'A title with a thesis', 'A line that frames a fight worth having — not another “fireside chat.”'],
    ['02', 'A cast, not a roster', 'Co-panelists chosen for tension and credibility, so the room leans in.'],
    ['03', 'A target stage', 'Pitched to exactly one conference, fit-built for that room and its agenda.'],
  ]
  const cast = [
    { initials: 'SC', role: 'Anchor', sub: 'Our client', anchor: true },
    { initials: 'TS', role: 'The Skeptic', sub: 'Creates tension' },
    { initials: 'OP', role: 'The Operator', sub: 'Adds proof' },
    { initials: 'MD', role: 'Moderator', sub: 'Keeps the line hot' },
  ]
  return (
    <section id="architecture" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker n="03 — Panel Architecture">The Product</Marker>
        </Reveal>

        <LineReveal
          className="display mt-10 text-[clamp(2.6rem,8vw,7rem)]"
          lines={[<>The panel</>, <>is the product.</>]}
        />

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-mist sm:text-xl">
            We don't apply to other people's panels.{' '}
            <span className="text-brand">We build the panel ourselves</span> — the title, the thesis,
            the co-panelists, the conference — and hand the organizer a finished product they'd be
            foolish to refuse.
          </p>
        </Reveal>

        {/* Deliverables */}
        <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {deliverables.map(([n, title, body], i) => (
            <Reveal key={n} delay={i * 90} className="contents">
              <div className="bg-ink p-8">
                <span className="label text-brand">Deliverable {n}</span>
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
            <span className="kicker text-brand">Figure 01 · The composed panel</span>
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
                <p className="kicker">Frames the question · Moderates tension · Owns the takeaway</p>
              </div>
            </div>
          </Reveal>

          {/* Finished pitch */}
          <Reveal delay={120}>
            <span className="kicker text-brand">The finished pitch we hand the conference</span>
            <div className="mt-5 flex h-[calc(100%-2rem)] flex-col justify-between border border-white/10 bg-panel p-8 sm:p-12">
              <div>
                <span className="label text-brand">Panel Concept</span>
                <p className="display mt-6 text-[clamp(1.6rem,3.2vw,2.6rem)]">
                  “The conviction premium: why markets reward leaders who refuse the middle.”
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
                <span className="kicker">Format · 4-person panel</span>
                <span className="kicker">Runtime · 45 min</span>
                <span className="kicker text-accept">Status · Accepted</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  TRAJECTORY METHOD — § 04                                            */
/* ================================================================== */
function Trajectory() {
  const steps = [
    { n: '01', icon: 'compass', title: 'Position', body: 'We find the contrarian thesis only your client can credibly own, and sharpen it into a line markets repeat.' },
    { n: '02', icon: 'layers', title: 'Architect', body: 'We design the panel and the cast around that thesis, then map it to the rooms where it lands hardest.' },
    { n: '03', icon: 'target', title: 'Place', body: 'We pitch organizers a finished product, negotiate the seat, and prep your client to own the moment.' },
    { n: '04', icon: 'spark', title: 'Compound', body: 'Every appearance becomes content, relationships, and inbound — so the trajectory keeps climbing.' },
  ]
  return (
    <section id="trajectory" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker n="04 — The Method">The System</Marker>
        </Reveal>
        <LineReveal
          className="display mt-10 text-[clamp(2.2rem,6vw,5rem)]"
          lines={[<>Four moves.</>, <span className="text-brand">One trajectory.</span>]}
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
/*  CTA — § 05 BEGIN                                                    */
/* ================================================================== */
function CTA() {
  const [sent, setSent] = useState(false)
  return (
    <section id="begin" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Marker n="05 — Begin">The Invitation</Marker>
        </Reveal>
        <div className="mt-10 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <LineReveal
              className="display text-[clamp(2.6rem,8vw,7rem)]"
              lines={[<>Every trajectory</>, <span className="text-brand">starts with a thesis.</span>]}
            />
            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
                Tell us who you're building and what they should be known for. If it's a fit, we'll
                send back the first stage we'd architect — before you've paid a cent.
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
                  We'll reply within one business day with a first move.
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
                  { ph: 'Who you’re positioning (name / title)', type: 'text' },
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
                  placeholder="In one line — what should they be known for?"
                  className="w-full resize-none bg-ink px-6 py-5 text-sm outline-none placeholder:text-faint focus:bg-panel"
                />
                <button
                  type="submit"
                  className="group flex w-full items-center justify-between bg-brand px-6 py-5 label text-[0.7rem] tracking-[0.2em] text-black transition-colors hover:bg-brandBright"
                >
                  Request our first move
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
              ['Profile', '#client'],
              ['Pipeline', '#pipeline'],
              ['Architecture', '#architecture'],
              ['Method', '#trajectory'],
              ['Begin', '#begin'],
            ].map(([l, h]) => (
              <a key={h} href={h} className="kicker transition-colors hover:text-brand">
                {l}
              </a>
            ))}
          </nav>
          <p className="kicker text-faint">© 2026 The Convincing Company · Speaker strategy in motion</p>
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
        <SampleClient />
        <Pipeline />
        <PanelArchitecture />
        <Trajectory />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
