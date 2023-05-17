import styles from '@/styles/explore.module.css'
import { ExploreBG } from '@/components/exploreBg'
import { Aside } from '@/components/aside'
import { NavigationLinks } from '@/components/navigationLinks'
import { Footer } from '@/components/footer'

export default function Explore() {
  return (
    <>
      <ExploreBG />
      <div className={styles.page}>
        <Aside />
        <main className={`exploreMain ${styles.main}`}>
          <header className='exploreHeader'>
            <nav className='navigation'>
              <NavigationLinks />
            </nav>
          </header>
          <Footer />
        </main>
      </div>
    </>
  )
}
