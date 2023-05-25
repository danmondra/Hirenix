import { HeaderLanding } from '@/components/landing/headerLanding'
import { MainSectionLanding } from '@/components/landing/mainSectionLanding'
import { PoweredSection } from '@/components/landing/poweredSection'
import { ProductsSection } from '@/components/landing/productsSection'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <>
      <HeaderLanding />
      <MainSectionLanding />
      <ProductsSection />
      <PoweredSection />
      <Footer />
    </>
  )
}
