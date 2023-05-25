import styles from '@/styles/landingPage.module.css'
import { PoweredLogos } from '@/components/landing/poweredLogos'
import { MainLink } from '@/components/landing/mainLink'

export function PoweredSection() {
  return (
    <section className={styles.powered}>
      <div className={styles.poweredBg} />
      <div className={`container ${styles.poweredContainer}`}>
        <div className={styles.poweredTopContainer}>
          <h3 className={styles.productsTitle}>Comienza a <span>explorar</span></h3>
          <MainLink />
        </div>
        <div className={styles.poweredBottomContainer}>
          <p className={styles.poweredByText}>Potenciado por:</p>
          <PoweredLogos />
        </div>
      </div>
    </section>
  )
}