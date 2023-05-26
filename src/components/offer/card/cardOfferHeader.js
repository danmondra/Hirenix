import styles from '@/styles/offer.module.css'
import { placeholderImageOffer } from '@/consts/miscellaneousDataInfojobs'

export function CardOfferHeader({ offer }) {
  const { author, title } = offer

  return (
    <header>
      <picture className={styles.cardLogoContainer}>
        <img src={author.logoUrl || placeholderImageOffer} alt={`Logo of author ${author?.name}`} className={styles.cardCompanyLogo} />
      </picture>
      <div className={styles.titleContainer}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.companyName}>{author?.name}</p>
      </div>
    </header>
  )
}
