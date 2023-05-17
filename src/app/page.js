import { HeaderLanding } from '@/components/headerLanding'
import { MainSectionLanding } from '@/components/mainSectionLanding'
import { PoweredSection } from '@/components/poweredSection'
import { ProductsSection } from '@/components/productsSection'
import { Footer } from '@/components/footer'

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
