import styles from '@/styles/landingPage.module.css'
import {
  LocationIcon,
  SalaryIcon,
  ExperienceIcon
} from '@/components/icons/icons'

export function JobExampleLanding() {
  return (
    <article className={styles.jobExample}>
      <h2 className={styles.jobTitle}>Diseñador UX/UI</h2>
      <span className={styles.jobLine} />
      <div className={styles.jobInfo}>
        <LocationIcon size='xs' />
        <p className={styles.location}>Madrid, España</p>
      </div>
      <div className={styles.jobInfo}>
        <SalaryIcon size='xs' />
        <p className={styles.salary}>30k - 40k</p>
      </div>
      <div className={styles.jobInfo}>
        <ExperienceIcon size='xs' />
        <p className={styles.experience}>2 Años de experiencia</p>
      </div>
    </article>
  )
}
