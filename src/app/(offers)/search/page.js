import { Filters } from '@/components/filters'
import styles from '@/styles/search.module.css'
import { CardOffer } from '@/components/cardOffer'
import { CardOfferSelect } from '@/components/cardOfferSelect'

export default function Search({ searchParams }) {
  console.log(searchParams)

  return (
    <section className={`containerExplore ${styles.search}`}>
      <header>
        <h1 className={styles.title}><span>302 Ofertas</span> para “Desarrollador Web”</h1>
        <p className={styles.text}>Mostrando 10 resultados de 302</p>
        <Filters />
      </header>
      <section className={styles.offersContainer}>
        {
          searchParams?.select
            ? <>
              <CardOfferSelect />
              <CardOfferSelect />
              <CardOfferSelect />
              </>
            : <>
              <CardOffer />
              <CardOffer />
              <CardOffer />
              </>

        }
      </section>
    </section>
  )
}
