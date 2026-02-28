export default function Team() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[2rem] font-semibold text-[#1A2E4A] mb-4">Uw consultant</h2>
          <p className="text-lg text-[#64748B] max-w-xl mx-auto">
            U heeft altijd één aanspreekpunt — iemand die uw organisatie kent
            en uw platform inricht en onderhoudt.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              {/* Foto */}
              <div className="sm:w-52 flex-shrink-0 overflow-hidden min-h-[200px] sm:min-h-0">
                <img
                  src="/kees-aling.jpg"
                  alt="Kees Aling"
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: '200px' }}
                />
              </div>

              {/* Bio */}
              <div className="flex-1 p-8">
                <div className="text-xs font-semibold text-[#1EBCD4] uppercase tracking-widest mb-2">
                  Uw vaste contactpersoon
                </div>
                <h3 className="text-xl font-bold text-[#1A2E4A] mb-1">Kees Aling</h3>
                <p className="text-sm text-[#64748B] mb-5">
                  Consultant Vendor &amp; Risk Management
                </p>
                <p className="text-sm text-[#1E293B] leading-relaxed mb-6">
                  Meer dan 10 jaar ervaring in vendor management, contractbeheer en compliance
                  bij (semi-)publieke organisaties. Richt uw platform in, begeleidt uw team
                  en blijft bereikbaar als uw aanpak verandert.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <a
                    href="mailto:k.aling@myvendormanager.nl"
                    className="text-sm text-[#1EBCD4] font-medium hover:underline"
                  >
                    k.aling@myvendormanager.nl
                  </a>
                  <span className="text-[#E2E8F0] hidden sm:inline">·</span>
                  <a
                    href="https://www.linkedin.com/in/keesaling"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#64748B] hover:text-[#1A2E4A] transition-colors flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
