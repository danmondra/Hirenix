import { UsersOfferGroups } from './userOfferGroups'
import styles from '@/styles/explore.module.css'

export function UserOffers() {
  return (
    <div className={styles.userOffers}>
      <UsersOfferGroups />
      <UsersOfferGroups />
      <UsersOfferGroups />
    </div>
  )
}
