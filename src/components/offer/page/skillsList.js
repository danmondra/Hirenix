import Link from 'next/link'
import styles from '@/styles/offer.module.css'

export function SkillsList({ skillsList }) {
  return (
    <div className={styles.skillsContainer}>
      {skillsList.map(({ skill }, i) => (
        <Link href={`/search?q=${skill}`} key={i} className={styles.skill}>{skill}</Link>
      ))}
    </div>
  )
}

export function UserSkillsList({ skillsList }) {
  return (
    <div className={styles.skillsContainer}>
      {skillsList.map((skill, i) => (
        <Link href={`/search?q=${skill}`} key={i} className={styles.skill}>{skill}</Link>
      ))}
    </div>
  )
}
