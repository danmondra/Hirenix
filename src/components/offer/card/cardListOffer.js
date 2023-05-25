import { CardOffer } from '@/components/offer/card/cardOffer'
import { getInfojobsOffers } from '@/services/getOffers'

export async function CardListOffer() {
  const { items: listOfOffers } = await getInfojobsOffers()

  return (
    <>
      {listOfOffers.map((offer) => (
        <CardOffer offer={offer} key={offer.id} />
      ))}
    </>
  )
}
