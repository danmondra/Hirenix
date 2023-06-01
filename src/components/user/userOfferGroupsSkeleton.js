import styles from '@/styles/explore.module.css'

export function UserOfferGroupsSkeleton() {
  return (
    <div className={styles.offerList}>
      <h3 className={styles.offerTitleSkeleton} />
      <div>
        <span className={styles.userOfferSkeleton} />
        <span className={styles.userOfferSkeleton} />
        <span className={styles.userOfferSkeleton} />
      </div>
    </div>
  )
}
