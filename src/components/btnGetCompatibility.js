import offerStyles from '@/styles/offer.module.css'
import { QuestionIcon } from '@/components/icons/icons'

export function BtnGetCompatibility() {
  return (
    <div>
      <button className={`${offerStyles.cardActionButton} ${offerStyles.actionButton}`}>
        <QuestionIcon size='medium' />
        <span>
          Obtener Compatibilidad
        </span>
      </button>
    </div>
  )
}
