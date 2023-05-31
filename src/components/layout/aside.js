'use client'

import styles from '@/styles/explore.module.css'
import { Logo } from '@/components/layout/logo'
import { Login } from '@/components/layout/login'
import { UserOffers } from '@/components/user/userOffers'
import { SearchAside } from '@/components/layout/searchAside'
import { UserAccountIcon } from '@/components/icons/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export async function Aside({ userToken }) {
  const [applications, setApplications] = useState([])
  const router = useRouter()

  const handleClick = () => {
    document.cookie = 'userTokenInfojobs' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    router.refresh()
  }

  useEffect(() => {
    const getUserOffers = async () => {
      const res = await fetch('/api/user/offers')
      const data = await res.json()
      console.log(data)
      setApplications(data?.applications)
    }
    if(!userToken) return
    getUserOffers()
  }, [])

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
        {applications.length > 0 && <UserOffers />}
      </div>

      <footer className='footerAside'>
        {userToken ? <button className='register logout' type='button' onClick={handleClick}>Cerrar Sesión</button> : <Login />}
      </footer>
    </aside>
  )
}
