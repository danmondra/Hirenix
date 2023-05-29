'use client'

import { useEffect, useState } from 'react'
import styles from '@/styles/offer.module.css'
import { InfoIcon, QuestionIcon } from '@/components/icons/icons'
import { getGPTResponse } from '@/services/getGPTResponse'

export function BtnGetCompatibility({ offerId }) {
  const [loading, setLoading] = useState(false)
  const [compatibility, setCompatibility] = useState({})
  const [userProfile, setUserProfile] = useState([])

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const profileLS = JSON.parse(localStorage.getItem('userProfile')) ?? []
      setUserProfile(profileLS)
    }
  }, [])

  const handleClick = async () => {
    if(value) return
    setLoading(true)
    try {
      const data = await getGPTResponse('/compatibility', { offerId, user: userProfile })
      setCompatibility(data)
    } catch(e) {
      console.log(e)
    }
    setLoading(false)
  }

  const {
    compatibility: value,
    missingRequirements
  } = compatibility

  return (
    <div className={styles.getCompatibilityContainer}>
      <button
        className={`${styles.cardActionButton} ${styles.actionButton}`}
        onClick={handleClick}
        disabled={Boolean(value) || !'usuarioFalse'}
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
        : (
          <div className={styles.compatibilityToolTip}>
            Obtener Compatibilidad
            <span className={styles.compatibilityInfo}>
              <InfoIcon size='xs' />
              <span> Para obtener tu compatibilidad con un empleo, primero sube un CV, o completa una entrevista general.</span>
            </span>
          </div>
          )}
    </div>
  )
}
