'use client'

import { useState } from 'react'
import styles from '@/styles/offer.module.css'
import { InfoIcon, QuestionIcon } from '@/components/icons/icons'

export function BtnGetCompatibility({ offerId }) {
  const [loading, setLoading] = useState(false)
  const [compatibility, setCompatibility] = useState(0)

  const handleClick = async () => {
    setLoading(true)
    const res = await fetch('/compatibility', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        offerId
      }),
      cache: 'no-store'
    })
    const data = await res.json()

    setCompatibility(Number(data.studiesCompatibility) + Number(data.experienceCompatibility) + Number(data.skillsCompatibility))
    setLoading(false)
  }

  return (
    <div className={styles.getCompatibilityContainer}>
      <button
        className={`${styles.cardActionButton} ${styles.actionButton}`}
        onClick={handleClick}
        disabled={Boolean(compatibility) || !'usuarioFalse'}
      >
        {
          loading
            ? <div className='lds-dual-ring' />
            : compatibility ? <span className={styles.compatibility}>{compatibility}</span> : <QuestionIcon size='medium' />
        }
        {
          compatibility
            ? <span>de Compatibilidad</span>
            : <span>Obtener Compatibilidad</span>
        }
      </button>
      <span className={styles.compatibilityToolTip}>
        Obtener Compatibilidad
        <span className={styles.compatibilityInfo}>
          <InfoIcon size='xs' />
          <span>
            Para obtener tu compatibilidad con un empleo, primero inicia sesión y sube un CV
          </span>
        </span>
      </span>
    </div>
  )
}
