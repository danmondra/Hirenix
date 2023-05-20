import { BtnGetCompatibility } from '@/components/btnGetCompatibility'
import { Interview, Science } from '@/components/icons'
import offerStyles from '@/styles/offer.module.css'

export function OfferActions() {
  return (
    <div className={offerStyles.actionsContainer}>
      <div className={offerStyles.buttonsContainer}>
        <BtnGetCompatibility />
        <button className={`${offerStyles.actionButton} ${offerStyles.blue}`}>
          <Science size='medium' />
          <span>Prueba Técnica</span>
        </button>
        <button className={`${offerStyles.actionButton} ${offerStyles.purpura}`}>
          <Interview size='medium' />
          <span>Entrevista Simulada</span>
        </button>
      </div>
    </div>
  )
}
