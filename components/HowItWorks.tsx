export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      week: 'Week 1–2',
      title: 'Inrichting',
      body: 'Uw leveranciers, contracten, categorieën en compliancekaders worden ingevoerd. Wij doen het zware werk — u hoeft alleen te controleren en goed te keuren.',
      highlight: 'U hoeft niets te doen',
    },
    {
      number: '02',
      week: 'Week 3–4',
      title: 'Live gaan',
      body: 'U en uw team starten in het platform. Wij begeleiden de eerste vragenlijstcyclus en zorgen dat iedereen zijn weg kent en vertrouwen heeft.',
      highlight: 'Inclusief teambegeleiding',
    },
    {
      number: '03',
      week: 'Daarna',
      title: 'Meegroei',
      body: 'Uw consultant blijft bereikbaar. Zodra uw aanpak verandert of uw organisatie groeit, past het platform mee. Geen ticket, geen wachtrij — gewoon bellen.',
      highlight: 'Direct persoonlijk contact',
    },
  ]

  return (
    <section id="hoe-het-werkt" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[2rem] font-semibold text-[#1A2E4A] mb-4">
            Van niets naar volledig ingericht in 4 weken
          </h2>
          <p className="text-lg text-[#64748B] max-w-xl mx-auto">
            Dat is wat wij beloven — en waarmaken. Geen lang implementatietraject,
            geen uitgebreide interne projecten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Verbindingslijn (desktop) */}
          <div
            className="hidden md:block absolute top-11 left-[calc(33.33%_+_12px)] right-[calc(33.33%_+_12px)] h-px bg-[#E2E8F0]"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div key={i} className="bg-[#F8FAFC] rounded-xl p-7 border border-[#E2E8F0] flex flex-col h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[2rem] font-bold text-[#1EBCD4] leading-none">{step.number}</span>
                <span className="text-xs font-semibold text-[#64748B] bg-white px-2.5 py-1 rounded-full border border-[#E2E8F0]">
                  {step.week}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2E4A] mb-3">{step.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-5 flex-1">{step.body}</p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1EBCD4]">
                <span className="w-1.5 h-1.5 bg-[#1EBCD4] rounded-full" />
                {step.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
