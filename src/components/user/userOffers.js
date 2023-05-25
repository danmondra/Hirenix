import styles from '@/styles/explore.module.css'
import { UsersOfferGroups } from '@/components/user/userOfferGroups'

export function UserOffers() {
  return (
    <div className={styles.userOffers}>
      <UsersOfferGroups />
      <UsersOfferGroups />
      <UsersOfferGroups />
    </div>
  )
}
