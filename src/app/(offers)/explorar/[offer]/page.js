import offerStyles from '@/styles/offer.module.css'
import { OfferHeader } from '@/components/offer/page/offerHeader'
import { OfferRequirements } from '@/components/offer/page/offerRequirements'
import { OfferDescription } from '@/components/offer/page/offerDescription'

export default function Offer() {
  return (
    <div className={`containerExplore ${offerStyles.offer}`}>
      <OfferHeader />
      <span className='divisorLine' />
      <section className={offerStyles.info}>
        <OfferRequirements />
        <span className='divisorLine' />
        <OfferDescription />
      </section>
      <span className='divisorLine' />
    </div>
  )
}
