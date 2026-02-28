export default function Hero() {
  return (
    <section className="pt-28 pb-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Linker kolom: content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1EBCD4]/10 text-[#1EBCD4] text-sm font-semibold px-3.5 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 bg-[#1EBCD4] rounded-full" />
              Live in 4 weken
            </div>
            <h1 className="text-[2.8rem] font-bold text-[#1A2E4A] leading-tight mb-6">
              Het vendor management platform dat meegaat met hoe{' '}
              <span className="text-[#1EBCD4]">uw organisatie</span> werkt
            </h1>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8 max-w-lg">
              Breng al uw leveranciers, contracten en complianceverplichtingen samen in één platform —
              volledig ingericht op uw processen, in het Nederlands, gehost in Europa.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#contact"
                className="bg-[#1EBCD4] hover:bg-[#17a3b8] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                Demo aanvragen
              </a>
              <a
                href="#hoe-het-werkt"
                className="text-[#1A2E4A] font-medium text-base hover:text-[#1EBCD4] transition-colors flex items-center gap-1.5"
              >
                Hoe het werkt
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <p className="mt-6 text-sm text-[#94A3B8]">
              Geen generieke configuratie · Uw werkwijze als uitgangspunt · Altijd een persoonlijk contactpersoon
            </p>
          </div>

          {/* Rechter kolom: platform mockup */}
          <div className="hidden lg:block">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden">
      {/* Venster chrome */}
      <div className="bg-[#1A2E4A] px-5 py-3 flex items-center gap-2.5">
        <div className="w-3 h-3 rounded-full bg-[#EF4444]/50" />
        <div className="w-3 h-3 rounded-full bg-[#F59E0B]/50" />
        <div className="w-3 h-3 rounded-full bg-[#22C55E]/50" />
        <span className="text-white/50 text-xs ml-3 font-medium">MyVendorManager — Leveranciers</span>
      </div>

      {/* Sidebar + content split */}
      <div className="flex">
        {/* Mini sidebar */}
        <div className="bg-[#1A2E4A]/95 w-10 flex flex-col items-center py-4 gap-4">
          {['🏠', '🏢', '📋', '✅', '🤖'].map((icon, i) => (
            <div
              key={i}
              className={`w-7 h-7 rounded-md flex items-center justify-center text-sm ${
                i === 1 ? 'bg-[#1EBCD4]/20' : ''
              }`}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Hoofdcontent */}
        <div className="flex-1">
          {/* KPI strip */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
            {[
              { label: 'Leveranciers', value: '23', note: '+2 dit kwartaal', ok: true },
              { label: 'Actieve contracten', value: '31', note: '4 verlopen binnenkort', ok: false },
              { label: 'Compliance score', value: '87%', note: '↑ 4% t.o.v. vorige ronde', ok: true },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white rounded-lg p-3 border border-[#E2E8F0]">
                <div className="text-[10px] text-[#64748B] mb-1">{kpi.label}</div>
                <div className="text-xl font-bold text-[#1A2E4A]">{kpi.value}</div>
                <div
                  className="text-[10px] mt-0.5 font-medium"
                  style={{ color: kpi.ok ? '#22C55E' : '#F97316' }}
                >
                  {kpi.note}
                </div>
              </div>
            ))}
          </div>

          {/* Mini tabel */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#1A2E4A]">Leveranciers op risico</span>
              <span className="text-[10px] text-[#1EBCD4] cursor-pointer font-medium">Bekijk alles →</span>
            </div>
            <div className="space-y-2.5">
              {[
                { name: 'Siemens Mobility', cat: 'Strategisch', risk: 'Hoog', color: '#EF4444' },
                { name: 'Arriva IT Services', cat: 'Tactisch', risk: 'Midden', color: '#F97316' },
                { name: 'Thales Nederland', cat: 'Strategisch', risk: 'Laag', color: '#22C55E' },
                { name: 'Strukton Rail', cat: 'Operationeel', risk: 'Laag', color: '#22C55E' },
              ].map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between py-1 border-b border-[#F1F5F9] last:border-0"
                >
                  <div>
                    <div className="text-xs font-medium text-[#1E293B]">{row.name}</div>
                    <div className="text-[10px] text-[#64748B]">{row.cat}</div>
                  </div>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: row.color + '22', color: row.color }}
                  >
                    {row.risk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
