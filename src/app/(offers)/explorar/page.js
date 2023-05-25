import styles from '@/styles/explore.module.css'
import { JobsGrid } from '@/components/explore/jobsGrid'
import { SearchSection } from '@/components/explore/searchSection'
import { CardOffer } from '@/components/offer/card/cardOffer'

export default function Explore() {
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
        <CardOffer />
        <CardOffer />
      </section>
    </>
  )
}
