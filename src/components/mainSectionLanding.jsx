import styles from '@/styles/landingPage.module.css'
import { JobsGrid } from '@/components/jobsGrid'
import { ArrowRight } from '@/components/icons'
import { JobExampleLanding } from '@/components/jobExampleLanding'

export function MainSectionLanding() {
  return (
    <main className={`container ${styles.main}`}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1 className={styles.title}>Una <span>nueva era</span> en la busqueda de <span>empleo y talento</span></h1>
          <p className={styles.text}>Impulsada por Inteligencia Artificial</p>
          <div className={styles.btnsContainer}>
            <button className={styles.btnEmpleos}>
              Explorar empleos
              <ArrowRight size='medium' />
            </button>
            <button className={styles.btnTalento}>Buscar talento</button>
          </div>
          <JobsGrid
            length={5}
          />
        </div>
        <section className={styles.jobExamples}>
          <JobExampleLanding />
          <JobExampleLanding />
        </section>
      </div>
    </main>
  )
}
