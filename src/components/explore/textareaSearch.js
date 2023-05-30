'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/explore.module.css'
import { getGPTResponse } from '@/services/getGPTResponse'
import { ArrowRightIcon } from '../icons/icons'
import { objectToParams } from '@/utils/transformURLParams'

export function TextareaSearch() {
  const [loading, setLoading] = useState(false)
  const [textarea, setTextarea] = useState('')
  const router = useRouter()

  const handleClick = async () => {
    if(textarea.length < 1) return
    setLoading(true)

    const data = await getGPTResponse('/search', { userSearch: textarea })
    const searchParams = objectToParams({ ...data, ai: 'true' })

    setLoading(false)
    setTextarea('')
    router.push(`/search${searchParams}`)
  }

  return (
    <figure className={styles.searchTextareaContainer}>
      <textarea
        id='mainSearch'
        name='mainSearch'
        cols='80'
        rows='5'
        className={styles.searchTextarea}
        placeholder='Ej.: “Posición Senior de administrador de bases de datos, con 2 años de experiencia, manejo de SQL, MongoDB, AWS, en España”.'
        onChange={(e) => setTextarea(e.target.value)}
      />

      <button
        type='button'
        className={`${styles.btnArrow}`}
        onClick={handleClick}
      >
        Buscar Empleos
        {
          loading
            ? <div className='lds-dual-ring medium' />
            : <ArrowRightIcon size='medium' />
        }
      </button>
    </figure>
  )
}
