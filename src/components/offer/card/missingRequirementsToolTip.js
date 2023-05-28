import Link from 'next/link'
import styles from '@/styles/offer.module.css'

export function MissingRequirementsToolTip({ missingRequirements }) {
  return (
    <div className={styles.skillsContainer}>
      {missingRequirements.map((req, i) => (
        <Link href={`/search?q=${req}`} key={i} className={styles.skill}>{req}</Link>
      ))}
    </div>
  )
}
