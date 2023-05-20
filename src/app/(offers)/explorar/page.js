import styles from '@/styles/explore.module.css'
import { JobsGrid } from '@/components/jobsGrid'
import { SearchSection } from '@/components/searchSection'
import { CardOffer } from '@/components/cardOffer'

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
