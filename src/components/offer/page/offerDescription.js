import offerStyles from '@/styles/offer.module.css'
import { formatText } from '@/utils/formatText'

export function OfferDescription({ offer }) {
  const { description } = offer

  return (
    <section className={offerStyles.description}>
      <h2 className={offerStyles.offerSubtitle}>Descripción</h2>
      {formatText(description)}
    </section>
  )
}
