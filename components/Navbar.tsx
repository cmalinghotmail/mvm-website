'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'border-b border-[#E2E8F0]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Woordmerk */}
        <a href="#" className="text-xl font-bold leading-none select-none">
          <span className="text-[#1A2E4A]">My</span>
          <span className="text-[#1EBCD4]">Vendor</span>
          <span className="text-[#1A2E4A]">Manager</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Hoe het werkt', href: '#hoe-het-werkt' },
            { label: 'Mogelijkheden', href: '#features' },
            { label: 'Compliance', href: '#compliance' },
            { label: 'Prijs', href: '#prijs' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#64748B] hover:text-[#1A2E4A] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-[#1EBCD4] hover:bg-[#17a3b8] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Demo aanvragen
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#64748B]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu openen"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0] px-6 py-4 flex flex-col gap-4">
          {[
            { label: 'Hoe het werkt', href: '#hoe-het-werkt' },
            { label: 'Mogelijkheden', href: '#features' },
            { label: 'Compliance', href: '#compliance' },
            { label: 'Prijs', href: '#prijs' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#1A2E4A] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
