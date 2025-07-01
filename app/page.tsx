import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import CommissionSection from '@/components/CommissionSection'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <CommissionSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
} 