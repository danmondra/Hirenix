'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/explore.module.css'
import offerStyles from '@/styles/offer.module.css'
import { ArrowRightIcon, InfoIcon, MagicSearchIcon } from '../icons/icons'
import Link from 'next/link'

export function SearchByProfile({ userProfile }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleClick = async () => {
    setLoading(true)

    const userProfileGenerated = document.cookie
      .split('; ')
      .find((row) => row.startsWith('userProfileGenerated='))
      ?.split('=')[1]

    const userProfileGeneratedDecoded = JSON.parse(decodeURIComponent(decodeURIComponent(userProfileGenerated)))

    if(userProfileGeneratedDecoded?.skills?.length > 5) {
      router.push(`/search?q=${userProfileGeneratedDecoded.skills.slice(0, 4).join(' ')}`)
      return
    }

    router.push(`/search?q=${userProfileGeneratedDecoded.skills.join(' ')}`)
    setLoading(false)
  }

  return (
    <article className={`${styles.cardProduct} ${styles.purpura} ${offerStyles.searchByProfile}`}>
      <header>
        <MagicSearchIcon size='normal' />
        <h3 className={styles.cardProductTitle}>
          Busca acorde a tu perfil
        </h3>
      </header>
      <button
        className={`${styles.btnArrow} ${styles.purpura} ${offerStyles.searchByProfileButton}`}
        type='button'
        onClick={handleClick}
        disabled={!userProfile}
      >
        Buscar
        {
          loading
            ? <div className='lds-dual-ring small purpura' />
            : <ArrowRightIcon size='medium' />
        }
      </button>

      <div className={`${offerStyles.compatibilityToolTip} ${offerStyles.purpura}`}>
        Busca ofertas para ti
        <span className={offerStyles.compatibilityInfo}>
          <InfoIcon size='xs' />
          <span>Primero completa una <Link href='/descubrir-puesto'>breve encuesta</Link> para completar tu perfil.</span>
        </span>
      </div>
    </article>
  )
}
