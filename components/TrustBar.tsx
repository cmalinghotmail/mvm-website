export default function TrustBar() {
  const signals = [
    {
      icon: '🇳🇱',
      label: 'Volledig Nederlandstalig',
      sub: 'Interface & support in het NL',
    },
    {
      icon: '🇪🇺',
      label: 'EU-hosting',
      sub: 'Azure West Europe — altijd',
    },
    {
      icon: '🛡️',
      label: 'NIS2-ready',
      sub: 'Frameworks en audit trail ingebouwd',
    },
    {
      icon: '🏛️',
      label: 'BIO-compliant',
      sub: 'Baseline Informatiebeveiliging Overheid',
    },
    {
      icon: '🔒',
      label: 'Lokale AI-optie',
      sub: 'Data verlaat uw organisatie niet',
    },
  ]

  return (
    <section className="bg-white border-y border-[#E2E8F0] py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8">
          {signals.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <div className="text-sm font-semibold text-[#1A2E4A]">{s.label}</div>
                <div className="text-xs text-[#64748B]">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
