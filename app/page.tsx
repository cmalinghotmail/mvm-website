import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import PainPoints from '@/components/PainPoints'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Compliance from '@/components/Compliance'
import Reference from '@/components/Reference'
import Team from '@/components/Team'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <HowItWorks />
        <Features />
        <Compliance />
        <Reference />
        <Team />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
