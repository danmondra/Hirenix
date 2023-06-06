import { Suspense } from 'react'
import { cookies } from 'next/headers'
import styles from '@/styles/explore.module.css'

import { JobsGrid } from '@/components/explore/jobsGrid'
import { SearchSection } from '@/components/explore/searchSection'
import { CardListOffer } from '@/components/offer/card/cardListOffer'
import { CardOfferSkeleton } from '@/components/offer/card/cardOfferSkeleton'

export default async function Explore() {
  const userProfileGenerated = cookies().get('userProfileGenerated') ?? null

  return (
    <>
      <SearchSection userProfile={userProfileGenerated} />
      <hr className='containerExplore divisorLineGreen' />
      <section className={`containerExplore ${styles.jobCategories}`}>
        <JobsGrid />
      </section>
      <hr className='containerExplore divisorLineGreen' />
      <section className={`containerExplore ${styles.offersSection}`}>
        <h2 className={styles.offersSectionTitle}>Nuevas Ofertas</h2>
        <Suspense
          fallback={[0, 0, 0].map((_, i) => <CardOfferSkeleton key={i} />)}
        >
          <CardListOffer />
        </Suspense>
      </section>
    </>
  )
}
