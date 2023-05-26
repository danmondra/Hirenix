'use client'

import { useRouter } from 'next/navigation'
import styles from '@/styles/explore.module.css'
import { ArrowRightIcon, InfoIcon, SearchIcon, ToggleOnIcon } from '@/components/icons/icons'
import { objectToParams } from '@/utils/transformURLParams'

export function SearchAside() {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget))
    const searchParams = objectToParams(data)

    if(data?.ai === 'on') {
      // TODO --- Add chatGPT here
      console.log('ai on')
    }

    router.push(`/search${searchParams}`)
    e.currentTarget.reset()
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
          <ArrowRightIcon size='small' />
          <input type='submit' value='' />
        </label>
      </fieldset>
      <label className={styles.searchGroupAi}>
        <span>
          Busqueda con AI
          <InfoIcon size='small' />
        </span>
        <input type='checkbox' name='ai' />
        <ToggleOnIcon />
      </label>
    </form>
  )
}
