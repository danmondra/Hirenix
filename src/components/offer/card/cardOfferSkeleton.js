import offerStyles from '@/styles/offer.module.css'
import { BtnGetCompatibility } from '@/components/btnGetCompatibility'
import { SaveIcon } from '@/components/icons/icons'

export function CardOfferSkeleton() {
  return (
    <article className={`${offerStyles.cardContainer} ${offerStyles.cardContainerSkeleton}`}>
      <div className={offerStyles.card}>
        <header>
          <div className={offerStyles.cardLogoContainer} />
          <div className={offerStyles.titleContainer}>
            <h3 className={offerStyles.cardTitle} />
            <p className={offerStyles.companyName} />
          </div>
        </header>
        <div className={offerStyles.cardInfo}>
          <div className={offerStyles.characteristicsGroup}>
            <span className={offerStyles.characteristicSkeleton} />
            <span className={offerStyles.characteristicSkeleton} />
            <span className={offerStyles.characteristicSkeleton} />
            <span className={offerStyles.characteristicSkeleton} />
          </div>
          <p className={offerStyles.shortDescription} />
        </div>
      </div>
      <div className={offerStyles.cardActions}>
        <BtnGetCompatibility />
        <button className={`${offerStyles.cardActionButton} ${offerStyles.actionButton}`}>
          <SaveIcon size='medium' />
        </button>
      </div>
    </article>
  )
}
