import styles from '@/styles/explore.module.css'
import { ExploreBG } from '@/components/layout/exploreBg'
import { Aside } from '@/components/layout/aside'
import { NavigationLinks } from '@/components/layout/navigationLinks'
import { Footer } from '@/components/layout/footer'

export default function OffersLayout({ children }) {
  return (
    <>
      <ExploreBG />
      <div className={styles.page}>
        <Aside />
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
