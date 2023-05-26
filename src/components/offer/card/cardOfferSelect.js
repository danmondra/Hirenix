import Link from 'next/link'
import offerStyles from '@/styles/offer.module.css'
import { CardOfferSelectCharacteristics } from '@/components/offer/offerCharacteristics'
import { CardOfferHeader } from '@/components/offer/card/cardOfferHeader'
import { ArrowRightIcon } from '@/components/icons/icons'

export function CardOfferSelect({ offer }) {
  return (
    <article className={offerStyles.cardContainer}>
      <Link href='/explorar/offer' className={`${offerStyles.card} ${offerStyles.cardSelect}`} scroll={false}>
        <CardOfferHeader offer={offer} />
        <div className={offerStyles.cardInfo}>
          <CardOfferSelectCharacteristics offer={offer} />
        </div>
        <p className={offerStyles.select}>
          Seleccionar
          <ArrowRightIcon size='medium' />
        </p>
      </Link>
    </article>
  )
}
