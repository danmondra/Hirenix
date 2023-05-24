import Link from 'next/link'
import offerStyles from '@/styles/offer.module.css'
import { CardOfferCharacteristics } from '@/components/offer/offerCharacteristics'
import { BtnGetCompatibility } from '@/components/btnGetCompatibility'
import { HeaderOfferCard } from '@/components/headerOfferCard'
import { SaveIcon } from '@/components/icons/icons'

export function CardOffer() {
  return (
    <article className={offerStyles.cardContainer}>
      <Link href='/explorar/offer' className={offerStyles.card} scroll={false}>
        <HeaderOfferCard />
        <div className={offerStyles.cardInfo}>
          <CardOfferCharacteristics />
          <p className={offerStyles.shortDescription}>Do you see front-end development as more than just solving back-end technical issues and instead view it as creating a unique user experience? Are you enthusiastic about collaboration with Product, Design, Business, and Marketing teams and enjoy synthesizing diverse demands into innovative solutions?</p>
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
