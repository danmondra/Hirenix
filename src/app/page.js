import { HeaderLanding } from '@/components/landing/headerLanding'
import { MainSectionLanding } from '@/components/landing/mainSectionLanding'
import { PoweredSection } from '@/components/landing/poweredSection'
import { ProductsSection } from '@/components/landing/productsSection'
import { Footer } from '@/components/layout/footer'
import { cookies } from 'next/headers'

export default async function Home() {
  const token = cookies().get('userTokenInfojobs')
  console.log(token)

  return (
    <>
      <HeaderLanding tokenSaved={token} />
      <MainSectionLanding />
      <ProductsSection />
      <PoweredSection />
      <Footer />
    </>
  )
}
