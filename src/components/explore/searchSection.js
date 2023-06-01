import styles from '@/styles/explore.module.css'
import { CardProduct } from '@/components/explore/cardProduct'
import { TextareaSearch } from './textareaSearch'
import { SearchByProfile } from './searchByProfile'

export function SearchSection({ userProfile }) {
  return (
    <section className={styles.searchSection}>
      <form
        className={styles.searchSectionForm}
      >
        <h1 className={styles.searchTitle}>
          <label htmlFor='mainSearch'>
            Describe tu <span>empleo ideal:</span> cargo, lugar, sueldo, etc.
          </label>
        </h1>
        <span className='divisorLine' />
        <TextareaSearch />
      </form>

      <section className={`containerExplore ${styles.cardsProductsGrid}`}>
        <CardProduct product='labs' />
        <SearchByProfile userProfile={userProfile} />
        <CardProduct product='descubrir' />
      </section>
    </section>
  )
}
