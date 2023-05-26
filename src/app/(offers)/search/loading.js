import styles from '@/styles/search.module.css'
import { Filters } from '@/components/search/filters'
import { CardOfferSkeleton } from '@/components/offer/card/cardOfferSkeleton'

export default function Loading({ searchParams }) {
  return (
    <section className={`containerExplore ${styles.search} ${styles.searchSkeleton}`}>
      <header>
        <h1 className={styles.title}>
          <span /> {searchParams?.q && `para “${searchParams?.q}”`}
        </h1>
        <p className={styles.text} />
        <Filters searchParams={searchParams} />
      </header>
      <section className={styles.offersContainer}>
        {[0, 0, 0].map((_, id) => (
          <CardOfferSkeleton key={id} />
        ))}
      </section>
    </section>
  )
}
