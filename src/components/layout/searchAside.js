'use client'

import { useRouter } from 'next/navigation'
import styles from '@/styles/explore.module.css'
import { ArrowRightIcon, InfoIcon, SearchIcon, ToggleOnIcon } from '@/components/icons/icons'
import { objectToParams } from '@/utils/transformURLParams'
import { useState } from 'react'
import { getGPTResponse } from '@/services/getGPTResponse'

const aiEnabled = JSON.parse(localStorage.getItem('searchWithAi'))

export function SearchAside() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()

    const dataForm = Object.fromEntries(new FormData(e.currentTarget))
    let searchParams = objectToParams(dataForm)

    if(dataForm?.ai === 'true') {
      const data = await getGPTResponse('/search', { userSearch: dataForm?.q })

      searchParams = objectToParams(data)
    }

    setLoading(false)
    router.push(`/search${searchParams}`)
    e.target.reset()
  }

  const handleChange = (e) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('searchWithAi', e.currentTarget.checked)
      e.currentTarget.defaultChecked = e.currentTarget.checked
    }
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
        <input type='search' id='searchAside' placeholder='Puesto, empresa o palabra clave' className={styles.searchInput} name='q' />
        <label className={styles.searchSubmit}>
          {
            loading
              ? <div className='lds-dual-ring small' />
              : <ArrowRightIcon size='small' />
          }
          <input type='submit' value='' />
        </label>
      </fieldset>
      <label className={styles.searchGroupAi}>
        <span>
          Busqueda con AI
          <InfoIcon size='small' />
        </span>
        <input
          type='checkbox'
          name='ai'
          value='true'
          onChange={handleChange}
          defaultChecked={aiEnabled}
        />
        <ToggleOnIcon />
      </label>
    </form>
  )
}
