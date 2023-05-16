import { MainSectionLanding } from '@/components/mainSectionLanding'
import { PoweredSection } from '@/components/poweredSection'
import { ProductsSection } from '@/components/productsSection'

export default function Home() {
  return (
    <>
      <MainSectionLanding />
      <ProductsSection />
      <PoweredSection />
    </>
  )
}
