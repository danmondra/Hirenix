import Link from 'next/link'
import offerStyles from '@/styles/offer.module.css'
import { BtnGetCompatibility } from '@/components/btnGetCompatibility'
import { InterviewIcon, ScienceIcon } from '@/components/icons/icons'

export function OfferActions({ id = null, user }) {
  return (
    <div className={offerStyles.actionsContainer}>
      <div className={offerStyles.buttonsContainer}>
        <BtnGetCompatibility offerId={id} user={user} />
        <Link href='/' className={`${offerStyles.actionButton} ${offerStyles.blue}`}>
          <ScienceIcon size='medium' />
          <span>Prueba Técnica</span>
        </Link>
        <Link href='/' className={`${offerStyles.actionButton} ${offerStyles.purpura}`}>
          <InterviewIcon size='medium' />
          <span>Entrevista Simulada</span>
        </Link>
      </div>
    </div>
  )
}
