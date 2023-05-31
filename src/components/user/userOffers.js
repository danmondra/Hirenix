import styles from '@/styles/explore.module.css'
import { UsersOfferGroups } from '@/components/user/userOfferGroups'

const productionURL = process.env.PRODUCTION_URL

export async function UserOffers() {
  return (
    <div className={styles.userOffers}>

      <UsersOfferGroups />
      <UsersOfferGroups />
      <UsersOfferGroups />
    </div>
  )
}
