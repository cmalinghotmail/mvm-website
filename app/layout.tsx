import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'MyVendorManager — Vendor & risicomanagement voor uw organisatie',
  description:
    'Het vendor management platform dat meegaat met hoe uw organisatie werkt. NIS2-ready, EU-hosting, live in 4 weken.',
  keywords:
    'vendor management, leveranciersbeheer, contractbeheer, NIS2, compliance, risicomanagement, BIO',
  openGraph: {
    title: 'MyVendorManager — Vendor Management Platform',
    description: 'Live in 4 weken. Ingericht op uw processen. Aanpasbaar aan uw groei.',
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
