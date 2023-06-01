import styles from '@/styles/explore.module.css'
import { ExploreBG } from '@/components/layout/exploreBg'
import { Aside } from '@/components/layout/aside'
import { NavigationLinks } from '@/components/layout/navigationLinks'
import { Footer } from '@/components/layout/footer'
import { cookies } from 'next/headers'

export default async function OffersLayout({ children }) {
  const userToken = cookies().get('userTokenInfojobs') ?? null

  return (
    <>
      <ExploreBG />
      <div className={styles.page}>
        <Aside userToken={userToken} />
        <main className={`exploreMain ${styles.main}`}>
          <section className={styles.mainContainerChild}>
            <header className='exploreHeader'>
              <nav className='navigation'>
                <NavigationLinks />
              </nav>
            </header>
            {children}
            <Footer />
          </section>
        </main>
      </div>
    </>
  )
}
