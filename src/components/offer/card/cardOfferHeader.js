import styles from '@/styles/offer.module.css'
import { placeholderImageOffer } from '@/consts/miscellaneousDataInfojobs'

export function CardOfferHeader({ offer }) {
  const { author, title } = offer

  return (
    <header>
      <img src={author.logoUrl || placeholderImageOffer} alt='' className={styles.cardCompanyLogo} />
      <div className={styles.titleContainer}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.companyName}>{author?.name}</p>
      </div>
    </header>
  )
}
