import Link from 'next/link'
import styles from '@/styles/offer.module.css'
import { formatText } from '@/utils/formatText'
import { OfferCharacteristicsRequirements } from '../offerCharacteristics'

export function OfferRequirements({ offer }) {
  const { minRequirements, skillsList } = offer

  return (
    <section className={styles.description}>
      <h2 className={styles.offerSubtitle}>Requisitos</h2>
      <div className={styles.contentContainer}>
        <OfferCharacteristicsRequirements offer={offer} />

        {
          skillsList.length !== 0 &&
            <div className={styles.skillsContainer}>
              {skillsList.map(({ skill }, i) => (
                <Link href={`/search?q=${skill}`} key={i} className={styles.skill}>{skill}</Link>
              ))}
            </div>
        }

        <div>
          {formatText(minRequirements)}
        </div>

      </div>
    </section>
  )
}
