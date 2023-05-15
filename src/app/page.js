import { JobsGrid } from '@/components/jobsGrid'
import {
  ArrowRight,
  Location,
  Salary,
  Experience
} from '@/components/icons'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
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
            <article className={styles.jobExample}>
              <h2 className={styles.jobTitle}>Diseñador UX/UI</h2>
              <span className={styles.jobLine} />
              <div className={styles.jobInfo}>
                <Location size='xs' />
                <p className={styles.location}>Madrid, España</p>
              </div>
              <div className={styles.jobInfo}>
                <Salary size='xs' />
                <p className={styles.salary}>30k - 40k</p>
              </div>
              <div className={styles.jobInfo}>
                <Experience size='xs' />
                <p className={styles.experience}>2 Años de experiencia</p>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  )
}
