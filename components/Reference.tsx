export default function Reference() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-4">
            Referentie
          </p>
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-10 md:p-14 text-center">
          {/* Transdev logo */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-white border border-[#E2E8F0] rounded-xl px-8 py-4 shadow-sm">
              <span className="text-2xl font-bold text-[#1A2E4A]">Transdev</span>
              <span className="text-2xl font-light text-[#64748B]"> Nederland</span>
            </div>
          </div>

          <blockquote className="text-xl md:text-2xl font-medium text-[#1A2E4A] leading-relaxed mb-8 italic">
            &ldquo;Transdev Nederland beheert haar leveranciers via MyVendorManager —
            van contractopvolging tot NIS2-compliance, alles op één plek.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-10 bg-[#1A2E4A]/10 rounded-full border border-[#E2E8F0] flex items-center justify-center">
              <span className="text-sm font-bold text-[#1A2E4A]">TN</span>
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-[#1A2E4A]">Contractmanagement team</div>
              <div className="text-xs text-[#64748B]">Transdev Nederland</div>
            </div>
          </div>

          {/* Statistieken */}
          <div className="grid grid-cols-3 gap-6 border-t border-[#E2E8F0] pt-8">
            {[
              { value: '20+', label: 'Leveranciers beheerd' },
              { value: '30+', label: 'Contracten bewaakt' },
              { value: '1e', label: 'NIS2-ronde voltooid' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#1EBCD4]">{stat.value}</div>
                <div className="text-sm text-[#64748B] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
