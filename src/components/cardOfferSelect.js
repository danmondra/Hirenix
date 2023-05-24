import Link from 'next/link'
import offerStyles from '@/styles/offer.module.css'
import { CardOfferSelectCharacteristics } from './offerCharacteristics'
import { ArrowRight } from './icons'
import { HeaderOfferCard } from './headerOfferCard'

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
          <ArrowRight size='medium' />
        </p>
      </Link>
    </article>
  )
}