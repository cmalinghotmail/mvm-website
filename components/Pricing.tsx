const tiers = [
  {
    type: 'Eenmalig',
    name: 'Implementatiefee',
    description:
      'Inrichting van het platform op uw processen. Datainvoer van leveranciers en contracten. Training voor uw team.',
    includes: [
      'Leveranciers & contracten importeren',
      'Compliancekaders configureren',
      'Vragenlijsten inrichten',
      'Teamtraining (1 dag)',
      'Eerste reviewcyclus begeleid',
    ],
    cta: 'Implementatie vanaf €5.000',
    primary: false,
  },
  {
    type: 'Maandelijks',
    name: 'Abonnement',
    description:
      'Toegang tot het volledig ingerichte platform. Hosting in Europa, updates, technische support en een maandelijkse check-in.',
    includes: [
      'Onbeperkt gebruikers',
      'Azure West Europe hosting',
      'Maandelijkse check-in',
      'Platform updates & nieuwe modules',
      'Basis support (next business day)',
    ],
    cta: 'Abonnement op aanvraag',
    primary: true,
  },
  {
    type: 'Op verzoek',
    name: 'Ad hoc consulting',
    description:
      'Doorontwikkeling, nieuwe modules of aanpassingen aan uw configuratie. Uw consultant is beschikbaar op uurbasis.',
    includes: [
      'Nieuwe dashboards of rapportages',
      'Extra vragenlijstmodules',
      'Workflowaanpassingen',
      'Integraties met andere systemen',
      'Projectbegeleiding compliance',
    ],
    cta: 'Bespreek uw wensen',
    primary: false,
  },
]

export default function Pricing() {
  return (
    <section id="prijs" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[2rem] font-semibold text-[#1A2E4A] mb-4">
            Transparant prijsmodel
          </h2>
          <p className="text-lg text-[#64748B] max-w-xl mx-auto">
            Drie lagen, elk met een heldere scope. Geen verborgen kosten,
            geen module-prijzenkaart, geen verrassing op de factuur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border flex flex-col p-7 ${
                tier.primary
                  ? 'border-[#1EBCD4] bg-[#1EBCD4]/5 shadow-lg ring-1 ring-[#1EBCD4]/20'
                  : 'border-[#E2E8F0] bg-white shadow-sm'
              }`}
            >
              {tier.primary && (
                <div className="text-[10px] font-bold text-white bg-[#1EBCD4] rounded-full px-3 py-1 self-start mb-3 uppercase tracking-wider">
                  Meest gekozen
                </div>
              )}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  {tier.type}
                </span>
                <h3 className="text-xl font-bold text-[#1A2E4A] mt-1 mb-3">{tier.name}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#1E293B]">
                    <span className="text-[#1EBCD4] mt-0.5 flex-shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                  tier.primary
                    ? 'bg-[#1EBCD4] text-white hover:bg-[#17a3b8]'
                    : 'border-2 border-[#1EBCD4] text-[#1EBCD4] hover:bg-[#1EBCD4]/5'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
