import styles from '@/styles/landingPage.module.css'
import {
  Location,
  Salary,
  Experience
} from '@/components/icons'

export function JobExampleLanding() {
  return (
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
  )
}
