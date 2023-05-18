import styles from '@/styles/explore.module.css'
import { BtnArrow } from '@/components/btnArrow'
import { CardProduct } from '@/components/cardProduct'

export default function Explore() {
  return (
    <section className={styles.searchSection}>
      <form className={styles.searchSectionForm}>
        <h1 className={styles.searchTitle}>
          <label htmlFor='mainSearch'>
            Describe tu <span>empleo ideal:</span> cargo, lugar, sueldo, etc.
          </label>
        </h1>
        <span className='divisorLine' />
        <figure className={styles.searchTextareaContainer}>
          <textarea
            id='mainSearch'
            name='mainSearch'
            cols='80'
            rows='5'
            className={styles.searchTextarea}
            placeholder='Ej.: “Posición Senior de administrador de bases de datos, con 2 años de experiencia, manejo de SQL, MongoDB, AWS, en España”.'
          />

          <BtnArrow>
            Buscar empleos
          </BtnArrow>
        </figure>

        <section className={`container ${styles.cardsProductsGrid}`}>

          <CardProduct product='labs' />
          <CardProduct product='search' />
          <CardProduct product='cv' />
        </section>
      </form>
    </section>
  )
}
