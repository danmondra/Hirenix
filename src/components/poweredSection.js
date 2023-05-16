import styles from '@/styles/landingPage.module.css'
import { ArrowRight } from '@/components/icons'
import { PoweredLogos } from '@/components/poweredLogos'

export function PoweredSection() {
  return (
    <section className={styles.powered}>
      <div className={styles.poweredBg} />
      <div className={`container ${styles.poweredContainer}`}>
        <div className={styles.poweredTopContainer}>
          <h3 className={styles.productsTitle}>Comienza a <span>explorar</span></h3>
          <button className={styles.btnEmpleos}>
            Explorar empleos
            <ArrowRight size='medium' />
          </button>
        </div>
        <div className={styles.poweredBottomContainer}>
          <p className={styles.poweredByText}>Potenciado por:</p>
          <PoweredLogos />
        </div>
      </div>
    </section>
  )
}
