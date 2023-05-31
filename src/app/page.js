import { HeaderLanding } from '@/components/landing/headerLanding'
import { MainSectionLanding } from '@/components/landing/mainSectionLanding'
import { PoweredSection } from '@/components/landing/poweredSection'
import { ProductsSection } from '@/components/landing/productsSection'
import { Footer } from '@/components/layout/footer'
import { cookies } from 'next/headers'

const redirectUri = process.env.INFOJOBS_REDIRECT_URI
const clientId = process.env.INFOJOBS_CLIENTID
const clientSecret = process.env.INFOJOBS_CLIENTSECRET

export default async function Home({ searchParams }) {
  let userAuth

  if(cookies().has('userAuthInfojobs')) {
    const decodedUserAuth = JSON.parse(decodeURIComponent(cookies().get('userAuthInfojobs')))
    userAuth = decodedUserAuth
  }

  if(searchParams?.code) {
    const res = await fetch(`https://www.infojobs.net/oauth/authorize?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${searchParams?.code}&redirect_uri=${redirectUri}`, {
      method: 'POST'
    })
    const data = await res.json()
    console.log({ data })

    const authRes = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        data
      }
    })
    const authData = await authRes.json()
    userAuth = authData
  }

  return (
    <>
      <HeaderLanding user={userAuth} searchParams={searchParams} />
      <MainSectionLanding />
      <ProductsSection />
      <PoweredSection />
      <Footer />
    </>
  )
}
