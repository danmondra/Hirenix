import styles from '@/styles/explore.module.css'
import { Logo } from '@/components/layout/logo'
import { Login } from '@/components/layout/login'
import { UserOffers } from '@/components/user/userOffers'
import { SearchAside } from '@/components/layout/searchAside'
import { UserAccountIcon } from '@/components/icons/icons'

export function Aside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.headerContainerAside}>
        <header className={styles.asideHeader}>
          <div className={styles.logoContainer}>
            <Logo />
            <button className={styles.btnUser}>
              <UserAccountIcon size='medium' />
            </button>
          </div>
        </header>
        <SearchAside />
        <UserOffers />
      </div>

      <footer className='footerAside'>
        <Login />
      </footer>
    </aside>
  )
}
