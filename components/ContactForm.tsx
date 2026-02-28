'use client'

import { useState } from 'react'

interface FormData {
  naam: string
  organisatie: string
  email: string
  telefoon: string
  bericht: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    naam: '',
    organisatie: '',
    email: '',
    telefoon: '',
    bericht: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Demo aanvraag — ${formData.organisatie || 'nieuw contact'}`
    )
    const body = encodeURIComponent(
      `Naam: ${formData.naam}\nOrganisatie: ${formData.organisatie}\nE-mail: ${formData.email}\nTelefoon: ${formData.telefoon}\n\nBericht:\n${formData.bericht}`
    )
    window.open(`mailto:k.aling@myvendormanager.nl?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-14">
            <div className="w-14 h-14 bg-[#1EBCD4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-[#1EBCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A2E4A] mb-3">Uw e-mailclient is geopend</h3>
            <p className="text-[#64748B] text-sm leading-relaxed mb-6">
              Stuur de vooraf ingevulde e-mail vanuit uw e-mailprogramma.
              Wij reageren binnen 1 werkdag.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm text-[#1EBCD4] font-medium hover:underline"
            >
              Formulier opnieuw invullen
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[2rem] font-semibold text-[#1A2E4A] mb-4">
            Plan een kennismaking
          </h2>
          <p className="text-lg text-[#64748B] max-w-xl mx-auto">
            Vertel ons over uw organisatie. Wij laten zien hoe het platform eruitziet
            voor uw specifieke situatie — geen generieke demo.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Linkerpaneel: info */}
            <div className="md:col-span-2 bg-[#1A2E4A] p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  My<span className="text-[#1EBCD4]">Vendor</span>Manager
                </h3>
                <p className="text-white/60 text-sm mb-8">
                  Vendor &amp; Risk Management Platform
                </p>
                <div className="space-y-5">
                  {[
                    { icon: '📧', label: 'E-mail', value: 'info@myvendormanager.nl' },
                    { icon: '⏱️', label: 'Reactietijd', value: 'Binnen 1 werkdag' },
                    { icon: '🗓️', label: 'Demo-duur', value: '45 minuten online' },
                    { icon: '🏢', label: 'Doelgroep', value: '(Semi-)publieke sector' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-lg mt-0.5">{item.icon}</span>
                      <div>
                        <div className="text-xs text-white/40 font-medium uppercase tracking-wider mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-sm text-white/80">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 bg-white/10 rounded-xl p-4 border border-white/10">
                <p className="text-white/70 text-xs leading-relaxed italic">
                  &ldquo;We laten u niet een generieke demo zien. We laten u uw eigen
                  organisatie zien — inclusief uw leverancierstypes en uw compliancekaders.&rdquo;
                </p>
              </div>
            </div>

            {/* Formulier */}
            <form onSubmit={handleSubmit} className="md:col-span-3 p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5">
                    Naam <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="text"
                    name="naam"
                    required
                    value={formData.naam}
                    onChange={handleChange}
                    placeholder="Jan de Vries"
                    className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1EBCD4] focus:ring-1 focus:ring-[#1EBCD4]/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5">
                    Organisatie <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="text"
                    name="organisatie"
                    required
                    value={formData.organisatie}
                    onChange={handleChange}
                    placeholder="Gemeente Amsterdam"
                    className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1EBCD4] focus:ring-1 focus:ring-[#1EBCD4]/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5">
                    E-mailadres <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="j.devries@gemeente.nl"
                    className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1EBCD4] focus:ring-1 focus:ring-[#1EBCD4]/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    name="telefoon"
                    value={formData.telefoon}
                    onChange={handleChange}
                    placeholder="+31 6 12345678"
                    className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1EBCD4] focus:ring-1 focus:ring-[#1EBCD4]/30 transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5">
                  Uw situatie (optioneel)
                </label>
                <textarea
                  name="bericht"
                  rows={4}
                  value={formData.bericht}
                  onChange={handleChange}
                  placeholder="Hoeveel leveranciers beheert u? Welk compliance-framework is voor u relevant? Wat is nu uw grootste knelpunt?"
                  className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1EBCD4] focus:ring-1 focus:ring-[#1EBCD4]/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1EBCD4] hover:bg-[#17a3b8] text-white font-semibold py-3.5 rounded-lg transition-colors text-base"
              >
                Demo aanvragen
              </button>
              <p className="text-xs text-[#94A3B8] text-center mt-3">
                Reactie binnen 1 werkdag · Geen verplichtingen
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
