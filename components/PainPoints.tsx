export default function PainPoints() {
  const points = [
    {
      icon: '📊',
      title: 'Leveranciersdata verspreid over Excel, e-mail en SharePoint',
      body: 'Niemand heeft het complete beeld. Wie is de contactpersoon? Wanneer loopt het contract af? Welke certificeringen zijn geldig? Drie collega\'s, drie antwoorden.',
    },
    {
      icon: '🔍',
      title: 'Bij een audit kunt u de compliance-status niet aantonen',
      body: 'De reviewronde van vorig jaar staat in een e-mailthread. De risicobeoordeling in een Word-bestand op iemands schijf. Dat is niet wat een auditor wil zien.',
    },
    {
      icon: '⏰',
      title: 'Contracten verlopen zonder dat iemand het doorheeft',
      body: 'U betaalt al maanden voor een contract dat automatisch is verlengd. Of erger: de opzegtermijn is verstreken en u zit vast voor nog een jaar.',
    },
    {
      icon: '📋',
      title: 'Als key contract manager het overzicht kwijtraken',
      body: 'Wie heeft de laatste meeting gevoerd? Wat zijn de openstaande actiepunten? Welke SLA-verplichtingen lopen achter? Die informatie staat verspreid in e-mail, OneNote en de hoofden van collega\'s.',
    },
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[2rem] font-semibold text-[#1A2E4A] mb-4">Herkent u dit?</h2>
          <p className="text-lg text-[#64748B] max-w-xl mx-auto">
            De meest gehoorde problemen bij contract- en vendor managers in de (semi-)publieke sector.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl p-7 border border-[#E2E8F0] shadow-sm"
            >
              <div className="text-4xl mb-5">{p.icon}</div>
              <h3 className="text-base font-semibold text-[#1A2E4A] mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
