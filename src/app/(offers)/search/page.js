import { Filters } from '@/components/filters'
import styles from '@/styles/search.module.css'
import { CardOffer } from '@/components/cardOffer'

export default function Search() {
  return (
    <section className={`containerExplore ${styles.search}`}>
      <header>
        <h1 className={styles.title}><span>302 Ofertas</span> para “Desarrollador Web”</h1>
        <p className={styles.text}>Mostrando 10 resultados de 302</p>
        <Filters />
        <CardOffer />
        <CardOffer />
        <CardOffer />
      </header>
    </section>
  )
}
