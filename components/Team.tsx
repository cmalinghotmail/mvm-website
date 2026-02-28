'use client'

const consultants = [
  {
    name: 'Kees Aling',
    title: 'Consultant Vendor & Risk Management',
    bio: 'Meer dan 10 jaar ervaring in vendor management, contractbeheer en compliance bij (semi-)publieke organisaties. Richt uw platform in, begeleidt uw team en blijft bereikbaar als uw aanpak verandert.',
    email: 'k.aling@myvendormanager.nl',
    linkedin: 'https://www.linkedin.com/in/keesaling',
    photo: '/kees-aling.jpg',
    initials: 'KA',
  },
  {
    name: 'Antoinette Wieman',
    title: 'Consultant Vendor Management',
    bio: 'Brede ervaring in vendor management en inkoop bij (semi-)publieke organisaties. Begeleidt implementaties van begin tot einde en zorgt dat het platform aansluit op uw dagelijkse praktijk.',
    email: 'info@myvendormanager.nl',
    linkedin: 'https://www.linkedin.com/in/%F0%9F%9A%80-antoinette-wieman-b693903/',
    photo: '/antoinette-wieman.jpg',
    initials: 'AW',
  },
]

export default function Team() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[2rem] font-semibold text-[#1A2E4A] mb-4">Uw consultants</h2>
          <p className="text-lg text-[#64748B] max-w-xl mx-auto">
            U heeft altijd een vast aanspreekpunt — iemand die uw organisatie kent
            en uw platform inricht en onderhoudt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {consultants.map((c) => (
            <div key={c.name} className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                {/* Foto */}
                <div className="sm:w-44 flex-shrink-0 min-h-[180px] sm:min-h-0 bg-[#EFF6FF] flex items-center justify-center overflow-hidden">
                  <img
                    src={c.photo}
                    alt={c.name}
                    className="w-full h-full object-cover object-top"
                    style={{ minHeight: '180px' }}
                    onError={(e) => {
                      const img = e.currentTarget
                      img.style.display = 'none'
                      const parent = img.parentElement
                      if (parent) {
                        parent.style.background = '#1A2E4A'
                        const span = document.createElement('span')
                        span.style.cssText = 'font-size:2rem;font-weight:700;color:#1EBCD4'
                        span.textContent = c.initials
                        parent.appendChild(span)
                      }
                    }}
                  />
                </div>

                {/* Bio */}
                <div className="flex-1 p-6">
                  <div className="text-xs font-semibold text-[#1EBCD4] uppercase tracking-widest mb-2">
                    Uw contactpersoon
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2E4A] mb-0.5">{c.name}</h3>
                  <p className="text-sm text-[#64748B] mb-4">{c.title}</p>
                  <p className="text-sm text-[#1E293B] leading-relaxed mb-5">{c.bio}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a
                      href={`mailto:${c.email}`}
                      className="text-sm text-[#1EBCD4] font-medium hover:underline"
                    >
                      {c.email}
                    </a>
                    <a
                      href={c.linkedin}
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
          ))}
        </div>
      </div>
    </section>
  )
}
