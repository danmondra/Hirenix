import offerStyles from '@/styles/offer.module.css'
import { OfferCharacteristics } from '@/components/offer/offerCharacteristics'
import { OfferActions } from '@/components/offer/page/offerActions'
import { placeholderImageOffer } from '@/consts/miscellaneousDataInfojobs'

export function OfferHeader({ offer, user }) {
  const { title, profile } = offer

  return (
    <div>
      <header className={offerStyles.offerHeader}>
        <picture className={offerStyles.logoContainer}>
          <img src={profile?.logoUrl || placeholderImageOffer} alt='' width='400' className={offerStyles.companyLogo} />
        </picture>
        <div className={offerStyles.titleContainer}>
          <h1 className={offerStyles.title}>{title}</h1>
          <p className={offerStyles.companyName}>{profile?.name}</p>
        </div>
      </header>
      <div className={offerStyles.cardInfo}>
        <OfferCharacteristics offer={offer} />
        <OfferActions id={offer?.id} user={user} />
      </div>
    </div>
  )
}
