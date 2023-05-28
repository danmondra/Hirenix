import styles from '@/styles/offer.module.css'
import { formatText } from '@/utils/formatText'
import { OfferCharacteristicsRequirements } from '../offerCharacteristics'
import { SkillsList } from './skillsList'

export function OfferRequirements({ offer }) {
  const { minRequirements, skillsList } = offer

  return (
    <section className={styles.description}>
      <h2 className={styles.offerSubtitle}>Requisitos</h2>
      <div className={styles.contentContainer}>
        <OfferCharacteristicsRequirements offer={offer} />

        {
          skillsList.length !== 0 &&
            <SkillsList skillsList={skillsList} />
        }

        <div>
          {formatText(minRequirements)}
        </div>

      </div>
    </section>
  )
}
