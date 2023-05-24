import Link from 'next/link'
import offerStyles from '@/styles/offer.module.css'
import { CardOfferSelectCharacteristics } from '@/components/offerCharacteristics'
import { HeaderOfferCard } from '@/components/headerOfferCard'
import { ArrowRightIcon } from '@/components/icons/icons'

export function CardOfferSelect() {
  return (
    <article className={offerStyles.cardContainer}>
      <Link href='/explorar/offer' className={`${offerStyles.card} ${offerStyles.cardSelect}`} scroll={false}>
        <HeaderOfferCard />
        <div className={offerStyles.cardInfo}>
          <CardOfferSelectCharacteristics />
        </div>
        <p className={offerStyles.select}>
          Seleccionar
          <ArrowRightIcon size='medium' />
        </p>
      </Link>
    </article>
  )
}
