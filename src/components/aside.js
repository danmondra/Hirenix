import styles from '@/styles/explore.module.css'
import { Logo } from '@/components/logo'
import { UserAccountIcon } from '@/components/icons'
import { Login } from '@/components/login'
import { UserOffers } from '@/components/userOffers'
import { SearchAside } from '@/components/searchAside'

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
