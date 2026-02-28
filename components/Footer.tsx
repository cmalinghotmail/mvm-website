export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1A2E4A] text-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Merk + beschrijving */}
          <div>
            <div className="text-xl font-bold mb-3">
              <span>My</span>
              <span className="text-[#1EBCD4]">Vendor</span>
              <span>Manager</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Het vendor management platform voor Nederlandse (semi-)publieke organisaties.
              Live in 4 weken, ingericht op uw processen.
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Platform
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Hoe het werkt', href: '#hoe-het-werkt' },
                { label: 'Mogelijkheden', href: '#features' },
                { label: 'Compliance & beveiliging', href: '#compliance' },
                { label: 'Prijsmodel', href: '#prijs' },
                { label: 'Demo aanvragen', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:info@myvendormanager.nl"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                info@myvendormanager.nl
              </a>
              <a
                href="mailto:k.aling@myvendormanager.nl"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                k.aling@myvendormanager.nl
              </a>
              <p className="text-sm text-white/40">Reactie binnen 1 werkdag</p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full" />
              <span className="text-xs text-white/40">Gehost op Azure West Europe</span>
            </div>
          </div>
        </div>

        {/* Onderkant */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <p className="text-xs text-white/30">
            © {currentYear} MyVendorManager · KvK: 12345678
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacyverklaring
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
