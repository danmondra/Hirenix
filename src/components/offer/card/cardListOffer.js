import { CardOffer } from '@/components/offer/card/cardOffer'
import { getInfojobsOffers } from '@/services/getOffers'
import { CardOfferSelect } from '@/components/offer/card/cardOfferSelect'
import { cookies } from 'next/headers'

export async function CardListOffer({ filters = { maxResults: 10 } }) {
  const { items: offerList } = await getInfojobsOffers(filters)
  const cookieStore = cookies()
  let userProfile
  if(cookieStore.has('userProfileGenerated')) {
    const userProfileGenerated = cookieStore.get('userProfileGenerated')
    userProfile = JSON.parse(decodeURIComponent(userProfileGenerated?.value))
  }

  return (
    <>
      {offerList.map((offer) => (
        <CardOffer offer={offer} user={userProfile} key={offer.id} />
      ))}
    </>
  )
}

export async function CardListOfferSelect() {
  const { items: offerList } = await getInfojobsOffers()

  return (
    <>
      {offerList.map((offer) => (
        <CardOfferSelect offer={offer} key={offer.id} />
      ))}
    </>
  )
}
