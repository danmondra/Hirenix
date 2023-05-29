import { CardOffer } from '@/components/offer/card/cardOffer'
import { getInfojobsOffers } from '@/services/getOffers'
import { CardOfferSelect } from '@/components/offer/card/cardOfferSelect'

export async function CardListOffer({ filters = { maxResults: 10 } }) {
  const { items: offerList } = await getInfojobsOffers(filters)

  return (
    <>
      {offerList.map((offer) => (
        <CardOffer offer={offer} key={offer.id} />
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
