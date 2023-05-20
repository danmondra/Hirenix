import offerStyles from '@/styles/offer.module.css'
import { Question } from '@/components/icons'

export function BtnGetCompatibility() {
  return (
    <div>
      <button className={`${offerStyles.cardActionButton} ${offerStyles.actionButton}`}>
        <Question size='medium' />
        <span>
          Obtener Compatibilidad
        </span>
      </button>
    </div>
  )
}
