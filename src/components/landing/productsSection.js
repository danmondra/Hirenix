import styles from '@/styles/landingPage.module.css'
import { ProductsGrid } from '@/components/productGrid'

export function ProductsSection() {
  return (
    <section className={styles.productsSection}>
      <div className={styles.productsBg} />
      <div className={`container ${styles.productsContainer}`}>
        <header className={styles.productsHeader}>
          <h2 className={styles.productsTitle}>Eficiencia y precisión</h2>
          <p className={styles.productsText}>Para lograrlo, estas son  algunas de nuestras herramientas:</p>
        </header>
        <ProductsGrid />
      </div>
    </section>
  )
}
