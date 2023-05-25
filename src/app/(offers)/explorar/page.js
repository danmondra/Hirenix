import styles from '@/styles/explore.module.css'
import { JobsGrid } from '@/components/explore/jobsGrid'
import { SearchSection } from '@/components/explore/searchSection'
import { CardListOffer } from '@/components/offer/card/cardListOffer'
import { Suspense } from 'react'

export default async function Explore() {
  return (
    <>
      <SearchSection />
      <hr className='containerExplore divisorLineGreen' />
      <section className={`containerExplore ${styles.jobCategories}`}>
        <JobsGrid />
      </section>
      <hr className='containerExplore divisorLineGreen' />
      <section className={`containerExplore ${styles.offersSection}`}>
        <h2 className={styles.offersSectionTitle}>Nuevas Ofertas</h2>
        <Suspense fallback={<h1 style={{ color: 'black' }}>CARGANDO</h1>}>
          <CardListOffer />
        </Suspense>
      </section>
    </>
  )
}
