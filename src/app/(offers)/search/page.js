import styles from '@/styles/search.module.css'
import Loading from '@/app/(offers)/search/loading'
import { Filters } from '@/components/search/filters'
import { CardOffer } from '@/components/offer/card/cardOffer'
import { getInfojobsOffers } from '@/services/getOffers'
import { CardOfferSelect } from '@/components/offer/card/cardOfferSelect'
import { Suspense } from 'react'
import { Pager } from '@/components/search/pager'
import { cookies } from 'next/headers'

export default function Prueba({ searchParams }) {
  const params = Object.keys(searchParams).includes('page')
    ? searchParams
    : { ...searchParams, page: 1 }

  return (
    <Suspense fallback={<Loading searchParams={searchParams} />} key={Date.now().toString()}>
      <Search searchParams={params} />
    </Suspense>
  )
}

export async function Search({ searchParams }) {
  const { items: offerList, currentResults, totalResults } = await getInfojobsOffers(searchParams)
  const cookieStore = cookies()
  let userProfile
  if(cookieStore.has('userProfileGenerated')) {
    const userProfileGenerated = cookieStore.get('userProfileGenerated')
    userProfile = JSON.parse(decodeURIComponent(userProfileGenerated?.value))
  }

  return (
    <section className={`containerExplore ${styles.search}`}>
      <header>
        <h1 className={styles.title}>
          {
            searchParams?.ai && !offerList
              ? <><span>Sin resultados</span> para tu busqueda, intenta con otro prompt</>
              : <><span>{totalResults} Ofertas</span> {searchParams?.q && `para “${searchParams?.q}”`}</>
          }
        </h1>
        <p className={styles.text}>Mostrando {currentResults} resultados de {totalResults}</p>
        <Filters searchParams={searchParams} />
      </header>

      <section className={styles.offersContainer}>
        {searchParams?.select
          ? (offerList?.map((offer) => (
            <CardOfferSelect offer={offer} key={offer.id} to={searchParams?.to} />
            )))
          : (offerList?.map((offer) => (
            <CardOffer offer={offer} key={offer.id} user={userProfile} />
            )))}
      </section>

      {
        offerList?.length > 0 &&
          <Pager searchParams={searchParams} />
      }
    </section>
  )
}
