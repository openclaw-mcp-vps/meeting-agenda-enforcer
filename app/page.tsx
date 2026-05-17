export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Team Leads &amp; Project Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Keep Meetings On Track with{' '}
          <span className="text-[#58a6ff]">Automated Agenda Enforcement</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Integrates with Zoom &amp; Teams to monitor transcripts in real-time, track agenda progress, and send gentle nudges when conversations drift off-topic.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $11/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            { icon: '🎯', label: 'Real-time topic tracking' },
            { icon: '🤖', label: 'AI-powered nudges' },
            { icon: '📋', label: 'Agenda item progress' },
          ].map((f) => (
            <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 flex items-center gap-2 justify-center">
              <span>{f.icon}</span>
              <span className="text-[#c9d1d9]">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$11<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to run focused meetings</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Zoom & Teams integration',
              'Real-time transcript analysis',
              'Automated off-topic nudges',
              'Agenda progress dashboard',
              'Unlimited meetings',
              'Email & Slack alerts',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it integrate with Zoom and Teams?',
              a: 'We use the official Zoom and Microsoft Teams APIs to access live meeting transcripts. You authorize the app once and it works automatically in the background.',
            },
            {
              q: 'How does the AI detect off-topic conversations?',
              a: 'You define your agenda items before the meeting. Our AI compares live speech against those items and flags when the discussion drifts for more than 60 seconds.',
            },
            {
              q: 'What happens when a nudge is triggered?',
              a: 'The meeting host receives a discreet notification — via Slack, email, or in-app — suggesting a gentle redirect. No interruptions to the meeting itself.',
            },
          ].map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{faq.q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Meeting Agenda Enforcer. All rights reserved.
      </footer>
    </main>
  )
}
