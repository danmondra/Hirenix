import Link from 'next/link'
import offerStyles from '@/styles/offer.module.css'
import { CardOfferCharacteristics } from '@/components/offer/offerCharacteristics'
import { BtnGetCompatibility } from '@/components/btnGetCompatibility'
import { CardOfferHeader } from '@/components/offer/card/cardOfferHeader'
import { SaveIcon } from '@/components/icons/icons'

export function CardOffer({ offer }) {
  const { id, requirementMin } = offer

  return (
    <article className={offerStyles.cardContainer}>
      <Link href={`/explorar/${id}`} className={offerStyles.card}>
        <CardOfferHeader offer={offer} />
        <div className={offerStyles.cardInfo}>
          <CardOfferCharacteristics offer={offer} />
          <p className={offerStyles.shortDescription}>{requirementMin}</p>
        </div>
      </Link>
      <div className={offerStyles.cardActions}>
        <BtnGetCompatibility />
        <button className={`${offerStyles.cardActionButton} ${offerStyles.actionButton}`}>
          <SaveIcon size='medium' />
        </button>
      </div>
    </article>
  )
}
