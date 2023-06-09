'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/explore.module.css'
import offerStyles from '@/styles/offer.module.css'

import { getGPTResponse } from '@/services/getGPTResponse'
import { objectToParams } from '@/utils/transformURLParams'

import { ArrowRightIcon, InfoIcon, SearchIcon, ToggleOnIcon } from '@/components/icons/icons'

export function SearchAside({ select, to = 'prueba-tecnica' }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const dataForm = Object.fromEntries(new FormData(e.currentTarget))
    let searchParams = objectToParams(dataForm)

    if(dataForm?.ai === 'true') {
      setLoading(true)
      const data = await getGPTResponse('/search', { userSearch: dataForm?.userPrompt })
      searchParams = objectToParams({ ...data, ai: 'true' })
    }

    searchParams = select
      ? `${searchParams}&select=true&to=${to}`
      : searchParams

    setLoading(false)
    router.push(`/search${searchParams}`)
    e.target.reset()
  }

  return (
    <form
      className={styles.searchForm}
      onSubmit={handleSubmit}
    >
      <fieldset className={styles.searchGroupInput}>
        <label htmlFor='searchAside'>
          <SearchIcon size='medium' />
        </label>
        <input
          type='search'
          id='searchAside'
          placeholder='Puesto, empresa o palabra clave'
          className={styles.searchInput}
          name='userPrompt'
        />

        {/* TODO - Loading button */}
        <label className={styles.searchSubmit}>
          {
            loading
              ? <div className='lds-dual-ring small' />
              : <ArrowRightIcon size='small' />
          }
          <input type='submit' value='' />
        </label>

      </fieldset>
      <div className={`${styles.searchGroupAi}`}>
        <span className={offerStyles.search}>
          Busqueda con AI
          <InfoIcon size='small' />
          <span className={offerStyles.compatibilityToolTip}>
            Busqueda Con Inteligencia Artificial
            <h4>Ejemplo de busqueda:</h4>
            <span
              className={offerStyles.compatibilityInfo}
            >
            "Me gustaría tener un empleo en diseño, con un sueldo superior a 2000 euros anuales y que esté en Barcelona, España"
            </span>
            <span className={offerStyles.compatibilityInfo}>
              <InfoIcon size='xs' />
              <span>
                Te recomendamos activar esta opción solo cuando no tengas claridad sobre lo que estás buscando. Ten en cuenta que cuanto más específica sea tu búsqueda, obtendrás menos resultados.
              </span>
            </span>
          </span>
        </span>
        <label>
          <input
            type='checkbox'
            name='ai'
            value='true'
          />
          <ToggleOnIcon />
        </label>
      </div>
    </form>
  )
}
