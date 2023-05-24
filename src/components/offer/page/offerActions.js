import { BtnGetCompatibility } from '@/components/btnGetCompatibility'
import { InterviewIcon, ScienceIcon } from '@/components/icons/icons'
import offerStyles from '@/styles/offer.module.css'

export function OfferActions() {
  return (
    <div className={offerStyles.actionsContainer}>
      <div className={offerStyles.buttonsContainer}>
        <BtnGetCompatibility />
        <button className={`${offerStyles.actionButton} ${offerStyles.blue}`}>
          <ScienceIcon size='medium' />
          <span>Prueba Técnica</span>
        </button>
        <button className={`${offerStyles.actionButton} ${offerStyles.purpura}`}>
          <InterviewIcon size='medium' />
          <span>Entrevista Simulada</span>
        </button>
      </div>
    </div>
  )
}
