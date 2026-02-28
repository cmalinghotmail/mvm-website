const features = [
  {
    icon: '🏢',
    title: 'Centraal leveranciersregister',
    body: 'Alle stamdata conform het Handelsregister — KvK-structuur, vestigingen, SBI-codes, rechtsvormen. Gecombineerd met uw eigen risicoscore, certificeringen en contracthistorie.',
  },
  {
    icon: '📋',
    title: 'Contractbeheer',
    body: 'Tijdlijn van al uw contracten. Automatische alerts bij naderende opzegtermijnen. Categorisering in strategisch, tactisch en operationeel — op uw manier.',
  },
  {
    icon: '✅',
    title: 'Compliance vragenlijsten',
    body: 'NIS2, ISO27001, CSRD — ingebouwde frameworks. Uitsturen met één klik, antwoorden ontvangen in het platform, beoordelen en archiveren met volledig bewijs.',
  },
  {
    icon: '⭐',
    title: 'Interne leveranciersbeoordeling',
    body: 'Haal ervaringen op bij uw eigen mensen via een beveiligd portallink. Scores per categorie, trendanalyse over meerdere rondes, NPS per leverancier.',
  },
  {
    icon: '🤖',
    title: 'AI contractanalyse',
    body: 'Stel vragen aan uw eigen contractdocumenten. Het antwoord komt altijd met een bronverwijzing: documentnaam én paginanummer. Geen hallucinaties zonder bewijs.',
  },
  {
    icon: '📜',
    title: 'Volledige audit trail',
    body: 'Wie deed wat, wanneer, op basis waarvan — onveranderlijk vastgelegd. Bij iedere audit heeft u het bewijs direct bij de hand, zonder zoeken.',
  },
  {
    icon: '🔐',
    title: 'Lokale AI-optie',
    body: 'Voor privacy-gevoelige omgevingen: de AI draait lokaal op uw eigen infrastructuur. Uw contractdata verlaat uw organisatie nooit — ook niet voor analyse.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[2rem] font-semibold text-[#1A2E4A] mb-4">
            Alles wat u nodig heeft
          </h2>
          <p className="text-lg text-[#64748B] max-w-xl mx-auto">
            Zeven modules, volledig geïntegreerd. Geen losse tools meer,
            geen koppelingen die stukgaan, geen dubbel werk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-white rounded-xl p-7 border border-[#E2E8F0] shadow-sm hover:border-[#1EBCD4]/40 transition-colors ${
                i === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="text-base font-semibold text-[#1A2E4A] mb-2">{f.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
