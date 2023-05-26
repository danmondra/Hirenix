import styles from '@/styles/offer.module.css'
import { OfferActions } from '@/components/offer/page/offerActions'

export default async function Offer() {
  return (
    <div className={`containerExplore ${styles.offer} ${styles.offerSkeleton}`}>
      <div>
        <header className={styles.offerHeader}>
          <div className={styles.logoContainer} />
          <div className={styles.titleContainer}>
            <h1 className={styles.title} />
            <p className={styles.companyName} />
          </div>
        </header>
        <div className={styles.cardInfo}>
          <div className={styles.characteristicsGroup}>
            <span className={styles.characteristicSkeleton} />
            <span className={styles.characteristicSkeleton} />
            <span className={styles.characteristicSkeleton} />
            <span className={styles.characteristicSkeleton} />
            <span className={styles.characteristicSkeleton} />
            <span className={styles.characteristicSkeleton} />
            <span className={styles.characteristicSkeleton} />
          </div>
          <OfferActions />
        </div>
      </div>
      <span className='divisorLine' />
      <section className={styles.info}>
        <section className={styles.description}>
          <h2 className={styles.offerSubtitle} />
          <div className={styles.contentContainer}>
            <div className={styles.characteristicsGroup}>
              <span className={styles.characteristicSkeleton} />
              <span className={styles.characteristicSkeleton} />
              <span className={styles.characteristicSkeleton} />
            </div>

            <div className={styles.skillsContainer}>
              {[0, 0, 0, 0, 0, 0].map((_, i) => (
                <span key={i} className={styles.skill} />
              ))}
            </div>

            <div className={styles.descriptionItem} />
          </div>
        </section>
        <span className='divisorLine' />
        <section className={styles.description}>
          <h2 className={styles.offerSubtitle} />
          <div className={styles.contentContainer}>
            <div className={styles.descriptionItem} />
          </div>
        </section>
      </section>
      <span className='divisorLine' />
    </div>
  )
}
