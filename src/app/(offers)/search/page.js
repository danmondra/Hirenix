import styles from '@/styles/search.module.css'
import { Filters } from '@/components/search/filters'
import { CardOffer } from '@/components/offer/card/cardOffer'
import { getInfojobsOffers } from '@/services/getOffers'
import { CardOfferSelect } from '@/components/offer/card/cardOfferSelect'

export default async function Search({ searchParams }) {
  const { items: offerList, currentResults, totalResults } = await getInfojobsOffers(searchParams)

  return (
    <section className={`containerExplore ${styles.search}`}>
      <header>
        <h1 className={styles.title}>
          <span>{totalResults} Ofertas</span> {searchParams?.q && `para “${searchParams?.q}”`}
        </h1>
        <p className={styles.text}>Mostrando {currentResults} resultados de {totalResults}</p>
        <Filters searchParams={searchParams} />
      </header>
      <section className={styles.offersContainer}>
        {searchParams?.select
          ? (offerList.map((offer) => (
            <CardOfferSelect offer={offer} key={offer.id} />
            )))
          : (offerList.map((offer) => (
            <CardOffer offer={offer} key={offer.id} />
            )))}
      </section>
    </section>
  )
}
