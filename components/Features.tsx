'use client'

import { useState } from 'react'

interface Feature {
  icon: string
  title: string
  body: string
  preview: React.ReactNode
}

function VendorListPreview() {
  const rows = [
    { name: 'Siemens Nederland', risk: 'Hoog', score: 82, status: 'alarm' },
    { name: 'Thales Group', risk: 'Middel', score: 91, status: 'ok' },
    { name: 'Atos SE', risk: 'Laag', score: 76, status: 'warning' },
    { name: 'Capgemini NL', risk: 'Middel', score: 88, status: 'ok' },
  ]
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden text-xs">
      <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center gap-2">
        <span className="text-[#1A2E4A] font-semibold text-sm">Leveranciersregister</span>
        <span className="ml-auto bg-[#1EBCD4]/10 text-[#1EBCD4] px-2 py-0.5 rounded-full text-[10px] font-medium">20 leveranciers</span>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#F1F5F9]">
            <th className="text-left px-4 py-2 text-[#94A3B8] font-medium">Naam</th>
            <th className="text-left px-4 py-2 text-[#94A3B8] font-medium">Risico</th>
            <th className="text-left px-4 py-2 text-[#94A3B8] font-medium">Score</th>
            <th className="text-left px-4 py-2 text-[#94A3B8] font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-b border-[#F8FAFC] hover:bg-[#F8FAFC]">
              <td className="px-4 py-2.5 text-[#1E293B] font-medium">{r.name}</td>
              <td className="px-4 py-2.5 text-[#64748B]">{r.risk}</td>
              <td className="px-4 py-2.5 text-[#1E293B] font-semibold">{r.score}</td>
              <td className="px-4 py-2.5">
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                  r.status === 'ok' ? 'bg-[#22C55E]/10 text-[#22C55E]' :
                  r.status === 'warning' ? 'bg-[#F97316]/10 text-[#F97316]' :
                  'bg-[#EF4444]/10 text-[#EF4444]'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    r.status === 'ok' ? 'bg-[#22C55E]' :
                    r.status === 'warning' ? 'bg-[#F97316]' : 'bg-[#EF4444]'
                  }`} />
                  {r.status === 'ok' ? 'Compliant' : r.status === 'warning' ? 'Aandacht' : 'Actie vereist'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ContractTimelinePreview() {
  const contracts = [
    { name: 'Raamovereenkomst ICT', start: 10, width: 60, status: 'ok' },
    { name: 'Licentieovereenkomst', start: 25, width: 40, status: 'warning' },
    { name: 'Servicecontract 2023', start: 5, width: 30, status: 'alarm' },
    { name: 'Consultancy raamcontract', start: 40, width: 55, status: 'ok' },
  ]
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden text-xs">
      <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center gap-2">
        <span className="text-[#1A2E4A] font-semibold text-sm">Contracttijdlijn</span>
        <span className="ml-auto text-[#EF4444] text-[10px] font-medium">⚠ 2 contracten lopen binnenkort af</span>
      </div>
      <div className="p-4 space-y-3">
        {contracts.map((c) => (
          <div key={c.name} className="flex items-center gap-3">
            <span className="w-40 truncate text-[#64748B] shrink-0">{c.name}</span>
            <div className="flex-1 h-5 bg-[#F1F5F9] rounded relative">
              <div
                className={`absolute h-full rounded text-[9px] text-white flex items-center px-2 font-medium ${
                  c.status === 'ok' ? 'bg-[#22C55E]' :
                  c.status === 'warning' ? 'bg-[#F97316]' : 'bg-[#EF4444]'
                }`}
                style={{ left: `${c.start}%`, width: `${c.width}%` }}
              >
                {c.status === 'alarm' ? '⚠ Verloopt' : ''}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between text-[#94A3B8] text-[9px] pt-1">
          <span>2023</span><span>2024</span><span>2025</span><span>2026</span><span>2027</span>
        </div>
      </div>
    </div>
  )
}

function QuestionnairePreview() {
  const questions = [
    { q: 'Beschikt u over een ISO27001 certificering?', answered: true, type: 'Ja / Nee' },
    { q: 'Is uw verwerkersovereenkomst up-to-date?', answered: true, type: 'Ja / Nee' },
    { q: 'Voert u jaarlijkse penetratietests uit?', answered: false, type: 'Ja / Nee' },
    { q: 'Heeft u een BCP gedocumenteerd?', answered: false, type: 'Ja / Nee' },
  ]
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden text-xs">
      <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center gap-2">
        <span className="text-[#1A2E4A] font-semibold text-sm">NIS2 Vragenlijst — Siemens</span>
        <span className="ml-auto text-[#1EBCD4] text-[10px] font-medium">2/4 beantwoord</span>
      </div>
      <div className="p-4 space-y-3">
        {questions.map((q, i) => (
          <div key={i} className={`flex items-start gap-3 p-3 rounded-lg border ${q.answered ? 'border-[#22C55E]/30 bg-[#22C55E]/5' : 'border-[#E2E8F0] bg-[#F8FAFC]'}`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${q.answered ? 'bg-[#22C55E]' : 'border-2 border-[#CBD5E1]'}`}>
              {q.answered && <span className="text-white text-[9px]">✓</span>}
            </div>
            <div className="flex-1">
              <p className="text-[#1E293B]">{q.q}</p>
              {!q.answered && (
                <div className="flex gap-2 mt-2">
                  <button className="px-3 py-1 rounded bg-[#1EBCD4] text-white text-[10px]">Ja</button>
                  <button className="px-3 py-1 rounded border border-[#E2E8F0] text-[#64748B] text-[10px]">Nee</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SurveyPreview() {
  const categories = [
    { name: 'Kwaliteit & Betrouwbaarheid', score: 4.2, delta: '+' },
    { name: 'Communicatie', score: 3.8, delta: '=' },
    { name: 'Contractnaleving', score: 4.5, delta: '+' },
    { name: 'Innovatie', score: 3.1, delta: '-' },
  ]
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden text-xs">
      <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center gap-2">
        <span className="text-[#1A2E4A] font-semibold text-sm">Beoordeling Thales — Q1 2026</span>
        <span className="ml-auto text-[10px] font-semibold text-[#1EBCD4]">Overall: 3.9 / 5</span>
      </div>
      <div className="p-4 space-y-3">
        {categories.map((c) => (
          <div key={c.name} className="flex items-center gap-3">
            <span className="w-44 truncate text-[#64748B] shrink-0">{c.name}</span>
            <div className="flex-1 h-3 bg-[#F1F5F9] rounded-full">
              <div
                className="h-full bg-[#1EBCD4] rounded-full"
                style={{ width: `${(c.score / 5) * 100}%` }}
              />
            </div>
            <span className="w-8 text-right text-[#1E293B] font-semibold">{c.score}</span>
            <span className={`text-[10px] font-bold w-4 ${c.delta === '+' ? 'text-[#22C55E]' : c.delta === '-' ? 'text-[#EF4444]' : 'text-[#94A3B8]'}`}>
              {c.delta === '+' ? '▲' : c.delta === '-' ? '▼' : '='}
            </span>
          </div>
        ))}
        <div className="mt-3 pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
          <span className="text-[#64748B]">NPS score</span>
          <span className="font-bold text-[#1A2E4A]">+42</span>
        </div>
      </div>
    </div>
  )
}

function AIPreview() {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden text-xs">
      <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <span className="text-[#1A2E4A] font-semibold text-sm">AI Contractanalyse</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="bg-[#F8FAFC] rounded-lg p-3 border border-[#E2E8F0]">
          <p className="text-[#64748B] italic">"Wat is de opzegtermijn in het raamcontract met Siemens?"</p>
        </div>
        <div className="bg-[#1EBCD4]/5 border border-[#1EBCD4]/20 rounded-lg p-3">
          <p className="text-[#1E293B] leading-relaxed">
            De opzegtermijn bedraagt <strong>6 maanden</strong> aan het einde van elk contractjaar,
            zoals vastgelegd in artikel 12.3 van de overeenkomst.
          </p>
          <div className="mt-2 pt-2 border-t border-[#1EBCD4]/20">
            <span className="text-[#64748B] text-[10px]">Bron: </span>
            <span className="text-[#1EBCD4] text-[10px] font-medium">Raamovereenkomst_Siemens_2023.pdf · pagina 18</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-lg px-3 py-2 border border-[#E2E8F0]">
          <span className="text-[#94A3B8] flex-1">Stel een vraag aan uw contracten...</span>
          <span className="text-[#1EBCD4] font-bold">→</span>
        </div>
      </div>
    </div>
  )
}

function AuditPreview() {
  const events = [
    { who: 'J. de Vries', action: 'Risicoscore bijgewerkt', entity: 'Siemens', time: '14:32' },
    { who: 'A. Bakker', action: 'Vragenlijst goedgekeurd', entity: 'NIS2 Q1 2026', time: '11:05' },
    { who: 'M. Hendriks', action: 'Contract verlengd', entity: 'Thales raamcontract', time: '09:18' },
    { who: 'Systeem', action: 'Verloopwaarschuwing verstuurd', entity: 'Atos contract', time: '08:00' },
  ]
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden text-xs">
      <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <span className="text-[#1A2E4A] font-semibold text-sm">Audit trail — vandaag</span>
      </div>
      <div className="divide-y divide-[#F8FAFC]">
        {events.map((e, i) => (
          <div key={i} className="px-4 py-2.5 flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#1EBCD4]/10 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[#1EBCD4] text-[9px] font-bold">{e.who[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#1E293B]"><span className="font-medium">{e.who}</span> · {e.action}</p>
              <p className="text-[#94A3B8]">{e.entity}</p>
            </div>
            <span className="text-[#94A3B8] shrink-0">{e.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function LocalAIPreview() {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden text-xs">
      <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <span className="text-[#1A2E4A] font-semibold text-sm">AI-configuratie — Tenant instellingen</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between p-3 rounded-lg border border-[#E2E8F0]">
          <div>
            <p className="text-[#1E293B] font-medium">Cloud AI (Anthropic Claude)</p>
            <p className="text-[#94A3B8]">Data verlaat uw infrastructuur</p>
          </div>
          <div className="w-9 h-5 rounded-full bg-[#E2E8F0] relative">
            <div className="w-4 h-4 rounded-full bg-white shadow absolute top-0.5 left-0.5 transition-all" />
          </div>
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg border border-[#1EBCD4]/30 bg-[#1EBCD4]/5">
          <div>
            <p className="text-[#1E293B] font-medium">Lokaal model (Ollama)</p>
            <p className="text-[#94A3B8]">Data blijft binnen uw organisatie</p>
          </div>
          <div className="w-9 h-5 rounded-full bg-[#1EBCD4] relative">
            <div className="w-4 h-4 rounded-full bg-white shadow absolute top-0.5 right-0.5 transition-all" />
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#22C55E]/5 border border-[#22C55E]/20 flex items-center gap-2">
          <span className="text-[#22C55E] text-base">✓</span>
          <p className="text-[#1E293B]">Lokaal model actief · 0 bytes extern verstuurd</p>
        </div>
      </div>
    </div>
  )
}

const features: Feature[] = [
  {
    icon: '🏢',
    title: 'Centraal leveranciersregister',
    body: 'Alle stamdata conform het Handelsregister — KvK-structuur, vestigingen, SBI-codes, rechtsvormen. Gecombineerd met uw eigen risicoscore, certificeringen en contracthistorie.',
    preview: <VendorListPreview />,
  },
  {
    icon: '📋',
    title: 'Contractbeheer',
    body: 'Tijdlijn van al uw contracten. Automatische alerts bij naderende opzegtermijnen. Categorisering in strategisch, tactisch en operationeel — op uw manier.',
    preview: <ContractTimelinePreview />,
  },
  {
    icon: '✅',
    title: 'Compliance vragenlijsten',
    body: 'NIS2, ISO27001, CSRD — ingebouwde frameworks. Uitsturen met één klik, antwoorden ontvangen in het platform, beoordelen en archiveren met volledig bewijs.',
    preview: <QuestionnairePreview />,
  },
  {
    icon: '⭐',
    title: 'Interne leveranciersbeoordeling',
    body: 'Haal ervaringen op bij uw eigen mensen via een beveiligd portallink. Scores per categorie, trendanalyse over meerdere rondes, NPS per leverancier.',
    preview: <SurveyPreview />,
  },
  {
    icon: '🤖',
    title: 'AI contractanalyse',
    body: 'Stel vragen aan uw eigen contractdocumenten. Het antwoord komt altijd met een bronverwijzing: documentnaam én paginanummer. Geen hallucinaties zonder bewijs.',
    preview: <AIPreview />,
  },
  {
    icon: '📜',
    title: 'Volledige audit trail',
    body: 'Wie deed wat, wanneer, op basis waarvan — onveranderlijk vastgelegd. Bij iedere audit heeft u het bewijs direct bij de hand, zonder zoeken.',
    preview: <AuditPreview />,
  },
  {
    icon: '🔐',
    title: 'Lokale AI-optie',
    body: 'Voor privacy-gevoelige omgevingen: de AI draait lokaal op uw eigen infrastructuur. Uw contractdata verlaat uw organisatie nooit — ook niet voor analyse.',
    preview: <LocalAIPreview />,
  },
]

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  return (
    <>
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
                className={`bg-white rounded-xl p-7 border border-[#E2E8F0] shadow-sm hover:border-[#1EBCD4]/40 hover:shadow-md transition-all cursor-pointer group ${
                  i === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                onClick={() => setActiveFeature(i)}
              >
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="text-base font-semibold text-[#1A2E4A] mb-2">{f.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-4">{f.body}</p>
                <span className="text-xs font-semibold text-[#1EBCD4] group-hover:underline flex items-center gap-1">
                  Bekijk in het platform
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeFeature !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setActiveFeature(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{features[activeFeature].icon}</span>
                <h3 className="text-base font-semibold text-[#1A2E4A]">
                  {features[activeFeature].title}
                </h3>
              </div>
              <button
                onClick={() => setActiveFeature(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#94A3B8] hover:bg-[#F8FAFC] hover:text-[#1A2E4A] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Preview */}
            <div className="p-6">
              {features[activeFeature].preview}
            </div>

            {/* Footer */}
            <div className="px-6 pb-6">
              <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                {features[activeFeature].body}
              </p>
              <a
                href="#contact"
                onClick={() => setActiveFeature(null)}
                className="inline-block bg-[#1EBCD4] hover:bg-[#17a3b8] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
              >
                Demo aanvragen
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
