import offerStyles from '@/styles/offer.module.css'
import { OfferHeader } from '@/components/offer/page/offerHeader'
import { OfferRequirements } from '@/components/offer/page/offerRequirements'
import { OfferDescription } from '@/components/offer/page/offerDescription'
import { getOfferById } from '@/services/getOffers'
import { cookies } from 'next/headers'

export default async function Offer({ params }) {
  const cookieStore = cookies()
  let userProfile
  if(cookieStore.has('userProfileGenerated')) {
    const userProfileGenerated = cookieStore.get('userProfileGenerated')
    userProfile = JSON.parse(decodeURIComponent(userProfileGenerated?.value))
  }

  const offer = await getOfferById(params.offer)

  return (
    <div className={`containerExplore ${offerStyles.offer}`}>
      <OfferHeader offer={offer} user={userProfile} />
      <span className='divisorLine' />
      <section className={offerStyles.info}>
        <OfferRequirements offer={offer} />
        <span className='divisorLine' />
        <OfferDescription offer={offer} />
      </section>
      <span className='divisorLine' />
    </div>
  )
}
