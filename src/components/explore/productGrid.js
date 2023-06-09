import styles from '@/styles/landingPage.module.css'
import { LabsIcon, MagicSearchIcon, ManagementIcon, ScanIcon } from '@/components/icons/icons'

export function ProductsGrid() {
  return (
    <div className={styles.productsGrid}>
      <div className={styles.productsGridBg} />
      <article className={styles.product}>
        <header className={styles.productContent}>
          <ScanIcon size='xl' />
          <h3 className={styles.productTitle}>Análisis de curriculum</h3>
        </header>
        <p className={styles.productsText}>Compara tu curriculum con una oferta de trabajo y obten una evaluación de compatibilidad para saber donde enfocar tus esfuerzos.</p>
      </article>
      <article className={styles.product}>
        <MagicSearchIcon size='large' />
        <div className={styles.productContent}>
          <h3 className={styles.productTitle}>Búsqueda sin opciones</h3>
          <p className={styles.productsText}>Solo describe lo que buscas. Simple versátil y práctico.</p>
        </div>
      </article>
      <article className={styles.product}>
        <ManagementIcon size='large' />
        <div className={styles.productContent}>
          <h3 className={styles.productTitle}>Reclutamiento</h3>
          <p className={styles.productsText}>Encuentra a los mejores aspirantes mediante IA</p>
        </div>
      </article>
      <article className={styles.product}>
        <LabsIcon size='large' />
        <div className={styles.productContent}>
          <h3 className={styles.productTitle}>Laboratorio de pruebas</h3>
          <p className={styles.productsText}>Descubre si estás preparado para una posición laboral mediante una prueba técnica, o una entrevista simulada, diseñadas a medida a partir de los requisitos de la empresa.</p>
        </div>
      </article>
    </div>
  )
}
