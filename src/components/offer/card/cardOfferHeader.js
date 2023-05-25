import styles from '@/styles/offer.module.css'

export function CardOfferHeader() {
  return (
    <header>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqyaPH6cdsDxpxehiAWNt5gMKzOAvsYdDbruljddF8&s' alt='' className={styles.cardCompanyLogo} />
      <div className={styles.titleContainer}>
        <h3 className={styles.cardTitle}>UX/UI and Front-End Engineering Manager - Madrid, Spain</h3>
        <p className={styles.companyName}>Western Union</p>
      </div>
    </header>
  )
}
