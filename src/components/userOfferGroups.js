import styles from '@/styles/explore.module.css'
import Link from 'next/link'

export function UsersOfferGroups() {
  return (
    <div className={styles.offerList}>
      <h3 className={styles.offerTitle}>Entrevistas Simuladas</h3>
      <div>
        <Link href='/'>Offer</Link>
        <Link href='/'>Offer</Link>
        <Link href='/'>Offer</Link>
        <Link href='/'>Offer</Link>
      </div>
    </div>
  )
}
