const CALENDLY_URL = "https://calendly.com";

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function CTAButton({ label = "Book a Lead Leakage Scan", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-base px-8 py-4 rounded-lg transition-colors duration-150 shadow-lg shadow-amber-900/30 ${className}`}
    >
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">

      {/* NAV */}
      <nav className="border-b border-slate-800 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <span className="font-bold text-slate-100 tracking-tight">AI RevOps Studio</span>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            Book a Scan →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-4 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Insurance Agencies · 3–30 Agents
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 leading-tight mb-6">
            Recover the insurance leads your team is already paying for.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            AI RevOps Studio installs missed-call recovery, speed-to-lead tracking, AI call summaries, and manager visibility for insurance agencies — without replacing your CRM.
          </p>
          <CTAButton />
          <p className="mt-4 text-sm text-slate-500">Free 15-minute scan. No commitment.</p>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="border-t border-slate-800" />
      </div>

      {/* PROBLEM */}
      <section className="px-4 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">The Real Problem</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Most agencies don&apos;t lose leads because they lack leads.
          </h2>
          <p className="text-slate-400 mb-8 text-base leading-relaxed">
            They lose them after they come in — to slow follow-up, missed calls, and gaps that never get reviewed.
          </p>
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 sm:p-8">
            <p className="text-slate-300 font-semibold mb-5">Sound familiar?</p>
            <ul className="space-y-3">
              {[
                "Calls go unanswered",
                "Follow-up is inconsistent",
                "CRM statuses are messy",
                "Call notes are incomplete",
                "Managers can't inspect every deal",
                "Old leads never get reactivated",
                "No one sees the leakage until it's too late",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <XIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="border-t border-slate-800" />
      </div>

      {/* SOLUTION */}
      <section className="px-4 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">How We Fix It</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Practical workflows built around your existing tools.
          </h2>
          <p className="text-slate-400 mb-8 text-base leading-relaxed">
            AI RevOps Studio installs practical workflows around your existing tools — no CRM migration required.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Missed-call recovery",
              "Speed-to-lead automation",
              "AI call summaries",
              "Objection tagging",
              "CRM follow-up tasks",
              "Manager dashboards",
              "Weekly lead leakage reports",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3"
              >
                <CheckIcon />
                <span className="text-slate-200 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="border-t border-slate-800" />
      </div>

      {/* OFFER */}
      <section className="px-4 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">The Scan</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Book a Lead Leakage Scan.
          </h2>
          <p className="text-slate-400 mb-8 text-base leading-relaxed">
            We map exactly where your leads are getting lost — and what it would take to recover them.
          </p>
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 sm:p-8">
            <p className="text-slate-300 font-semibold mb-5">We&apos;ll map:</p>
            <ul className="space-y-3">
              {[
                "Where leads enter",
                "Where they get stuck",
                "How fast they're contacted",
                "How missed calls are handled",
                "What agents are logging",
                "What managers can see",
                "What automations would recover lost opportunities",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 text-center">
            <CTAButton />
            <p className="mt-3 text-sm text-slate-500">15 minutes. No prep needed.</p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="border-t border-slate-800" />
      </div>

      {/* PRICING */}
      <section className="px-4 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Straightforward implementation pricing.
          </h2>
          <div className="bg-slate-800/60 border border-amber-500/30 rounded-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-slate-400 text-sm mb-1">Implementation packages start at</p>
                <p className="text-3xl font-extrabold text-slate-100">
                  $5,000 <span className="text-lg font-semibold text-slate-400">setup</span>
                </p>
                <p className="text-xl font-bold text-amber-400 mt-1">
                  + $1,500<span className="text-base font-medium text-slate-400">/month</span>
                </p>
              </div>
              <div className="sm:text-right">
                <p className="text-slate-400 text-sm leading-relaxed">
                  Scope is confirmed after your<br className="hidden sm:block" /> Lead Leakage Scan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="border-t border-slate-800" />
      </div>

      {/* TRUST */}
      <section className="px-4 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Us</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">
            We know the insurance sales floor.
          </h2>
          <div className="space-y-4">
            {[
              "Built internal systems for insurance sales operations",
              "Experience with CRM workflows, lead follow-up, call summaries, and automation",
              "Understands insurance sales floor realities",
              "Builds around existing tools instead of forcing a CRM migration",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mt-0.5">
                  <CheckIcon />
                </div>
                <p className="text-slate-300 leading-relaxed pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-16 sm:py-24 bg-slate-800/40">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 mb-4">
            Ready to find your lead leakage?
          </h2>
          <p className="text-slate-400 mb-8 text-lg max-w-xl mx-auto">
            Book a free 15-minute Lead Leakage Scan. We&apos;ll show you exactly where deals are getting lost and what it would take to recover them.
          </p>
          <CTAButton label="Book a Lead Leakage Scan →" className="text-lg px-10 py-5" />
          <p className="mt-4 text-sm text-slate-500">No commitment. No prep needed. Just 15 minutes.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 px-4 py-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-sm">
          <span className="font-semibold text-slate-400">AI RevOps Studio</span>
          <span>Built for insurance agencies.</span>
        </div>
      </footer>

    </main>
  );
}
