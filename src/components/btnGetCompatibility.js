'use client'

import { useState } from 'react'
import styles from '@/styles/offer.module.css'
import { InfoIcon, QuestionIcon } from '@/components/icons/icons'
import { getGPTResponse } from '@/services/getGPTResponse'
import Link from 'next/link'

export function BtnGetCompatibility({ offerId, user }) {
  const [loading, setLoading] = useState(false)
  const [compatibility, setCompatibility] = useState({})

  const {
    compatibility: value,
    missingRequirements
  } = compatibility

  const handleClick = async () => {
    if(value || !user) return
    setLoading(true)
    try {
      const data = await getGPTResponse('/compatibility', { offerId })
      setCompatibility(data)
    } catch(e) {
      console.log(e)
    }
    setLoading(false)
  }

  return (
    <div className={styles.getCompatibilityContainer}>
      <button
        className={`${styles.cardActionButton} ${styles.actionButton}`}
        onClick={handleClick}
        disabled={!user || value}
      >
        {
          loading
            ? <div className='lds-dual-ring' />
            : value ? <span className={styles.compatibility}>{value}</span> : <QuestionIcon size='medium' />
        }
        {
          value
            ? <span>de Compatibilidad</span>
            : <span>Obtener Compatibilidad</span>
        }
      </button>

      {value
        ? (
          <div className={styles.compatibilityToolTip}>
            {value} / 100 de compatibilidad:
            <h4>No cumples con estos requisitos:</h4>
            {
              missingRequirements.length > 0 &&
                <ul>
                  {missingRequirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
            }
          </div>
          )
        : user
          ? (
            <div className={styles.compatibilityToolTip}>
              Obtener Compatibilidad
              <span className={styles.compatibilityInfo}>
                <InfoIcon size='xs' />
                <span>Encuentra tu compatibilidad con un empleo</span>
              </span>
            </div>
            )
          : (
            <div className={styles.compatibilityToolTip}>
              Obtener Compatibilidad
              <span className={styles.compatibilityInfo}>
                <InfoIcon size='xs' />
                <span>Antes de obtener tu compatibilidad con un empleo, haz una <Link href='/descubrir-puesto'>breve encuesta</Link> para completar tu perfil.</span>
              </span>
            </div>
            )}
    </div>
  )
}
