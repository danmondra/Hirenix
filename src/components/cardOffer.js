import Link from 'next/link'
import offerStyles from '@/styles/offer.module.css'
import { Save } from '@/components/icons'
import { CardOfferCharacteristics } from './offerCharacteristics'
import { BtnGetCompatibility } from './btnGetCompatibility'

export function CardOffer() {
  return (
    <article className={offerStyles.cardContainer}>
      <Link href='/explorar/offer' className={offerStyles.card} scroll={false}>
        <header>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqyaPH6cdsDxpxehiAWNt5gMKzOAvsYdDbruljddF8&s' alt='' className={offerStyles.cardCompanyLogo} />
          <div className={offerStyles.titleContainer}>
            <h3 className={offerStyles.cardTitle}>UX/UI and Front-End Engineering Manager - Madrid, Spain</h3>
            <p className={offerStyles.companyName}>Western Union</p>
          </div>
        </header>
        <div className={offerStyles.cardInfo}>
          <CardOfferCharacteristics />
          <p className={offerStyles.shortDescription}>Do you see front-end development as more than just solving back-end technical issues and instead view it as creating a unique user experience? Are you enthusiastic about collaboration with Product, Design, Business, and Marketing teams and enjoy synthesizing diverse demands into innovative solutions?</p>
        </div>
      </Link>
      <div className={offerStyles.cardActions}>
        <BtnGetCompatibility />
        <button className={`${offerStyles.cardActionButton} ${offerStyles.actionButton}`}>
          <Save size='medium' />
        </button>
      </div>
    </article>
  )
}
