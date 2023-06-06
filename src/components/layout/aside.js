import Link from 'next/link'
import styles from '@/styles/explore.module.css'

import { Logo } from '@/components/layout/logo'
import { Login } from '@/components/layout/login'
import { UserOffers } from '@/components/user/userOffers'
import { SearchAside } from '@/components/layout/searchAside'
import { Logout } from '@/components/layout/logout'
import { UserAccountIcon } from '@/components/icons/icons'

export async function Aside({ userToken }) {
  return (
    <aside className={styles.aside}>
      <div className={styles.headerContainerAside}>
        <header className={styles.asideHeader}>
          <div className={styles.logoContainer}>
            <Logo />
            <Link href='/descubrir-puesto' className={styles.btnUser}>
              <UserAccountIcon size='medium' />
            </Link>
          </div>
        </header>
        <SearchAside />
        <UserOffers userToken={userToken} />
      </div>

      <footer className='footerAside'>
        {userToken ? <Logout /> : <Login tokenSaved={userToken} />}
      </footer>
    </aside>
  )
}
