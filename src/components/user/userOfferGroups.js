import styles from '@/styles/explore.module.css'
import Link from 'next/link'

export function UsersOfferGroups({ nameGroup, offerList }) {
  return (
    <div className={styles.offerList}>
      <h3 className={styles.offerTitle}>{nameGroup}</h3>
      <div>
        {offerList?.length
          ? offerList.map(offer => (
              <Link href={`/explorar/${offer?.jobOffer?.code}`} key={offer?.jobOffer?.code}>{offer?.jobOffer?.title}</Link>
          ))
          : <span className={styles.userOffersPlaceholder}>No tienes candidaturas aún</span>}
      </div>
    </div>
  )
}
