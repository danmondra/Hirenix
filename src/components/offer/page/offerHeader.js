import offerStyles from '@/styles/offer.module.css'
import { OfferCharacteristics } from '@/components/offer/offerCharacteristics'
import { OfferActions } from '@/components/offer/page/offerActions'

export function OfferHeader() {
  return (
    <div>
      <header className={offerStyles.offerHeader}>
        <picture className={offerStyles.logoContainer}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqyaPH6cdsDxpxehiAWNt5gMKzOAvsYdDbruljddF8&s' alt='' className={offerStyles.companyLogo} />
        </picture>
        <div className={offerStyles.titleContainer}>
          <h1 className={offerStyles.title}>UX/UI and Front-End Engineering Manager - Madrid, Spain</h1>
          <p className={offerStyles.companyName}>Western Union</p>
        </div>
      </header>
      <div className={offerStyles.cardInfo}>
        <OfferCharacteristics />
        <OfferActions />
      </div>
    </div>
  )
}
