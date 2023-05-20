import offerStyles from '@/styles/offer.module.css'
import { OfferHeader } from '@/components/offerHeader'
import { OfferRequirements } from '@/components/offerRequirements'
import { OfferDescription } from '@/components/offerDescription'

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
