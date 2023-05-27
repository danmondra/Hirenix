'use client'

import { useState } from 'react'
import offerStyles from '@/styles/offer.module.css'
import { InfoIcon, QuestionIcon } from '@/components/icons/icons'

export function BtnGetCompatibility() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    // TODO --- Get Compatibility HERE
    setLoading(!loading)
  }

  return (
    <div className={offerStyles.getCompatibilityContainer}>
      <button
        className={`${offerStyles.cardActionButton} ${offerStyles.actionButton}`}
        onClick={handleClick}
      >
        {
          loading
            ? <div className='lds-dual-ring' />
            : <QuestionIcon size='medium' />
        }
        <span>Obtener Compatibilidad</span>
      </button>
      <span className={offerStyles.compatibilityToolTip}>
        Obtener Compatibilidad
        <span className={offerStyles.compatibilityInfo}>
          <InfoIcon size='xs' />
          <span>
            Para obtener tu compatibilidad con un empleo, primero inicia sesión y sube un CV
          </span>
        </span>
      </span>
    </div>
  )
}
