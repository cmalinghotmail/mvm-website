const badges = [
  {
    label: 'NIS2-ready',
    description: 'Vragensets en audit trail conform de NIS2-richtlijn voor kritieke infrastructuur',
  },
  {
    label: 'BIO-compliant',
    description: 'Baseline Informatiebeveiliging Overheid — verplicht voor overheidsorganisaties',
  },
  {
    label: 'ISO 27001',
    description: 'Informatiebeveiligingsvragenlijst en beoordelingsmodule ingebouwd',
  },
  {
    label: 'AVG / GDPR',
    description: 'Persoonsgegevens verwerking conform Europese privacywetgeving',
  },
  {
    label: 'Audit trail',
    description: 'Onveranderlijk logboek van elke actie — wie, wat, wanneer, op basis waarvan',
  },
  {
    label: 'EU-hosting',
    description: 'Microsoft Azure West Europe — uw data blijft altijd in Europa',
  },
]

export default function Compliance() {
  return (
    <section id="compliance" className="py-20 bg-[#1A2E4A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[2rem] font-semibold text-white mb-4">Wat vaststaat</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Beveiliging, compliance en dataresidentie zijn geen opties die u aanzet.
            Ze zijn standaard ingebakken in het platform — voor elke klant, vanaf dag één.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="bg-white/10 rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors text-center"
            >
              <div className="text-[#1EBCD4] font-semibold text-sm mb-2">{b.label}</div>
              <div className="text-white/50 text-xs leading-snug">{b.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-10 text-center">
          <p className="text-white/50 text-sm mb-1 font-medium uppercase tracking-wider text-xs">
            Wat aanpasbaar is per klant
          </p>
          <p className="text-white/70 text-base">
            Dashboards · Vragenlijsten · Workflows · Rapportages · Domeincategorieën · Drempelwaarden
          </p>
        </div>
      </div>
    </section>
  )
}
