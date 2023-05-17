import styles from '@/styles/explore.module.css'
import { ArrowRight, InfoIcon, SearchIcon, ToggleOnIcon } from '@/components/icons'

export function SearchAside() {
  return (
    <form className={styles.searchForm}>
      <fieldset className={styles.searchGroupInput}>
        <label htmlFor='searchAside'>
          <SearchIcon size='medium' />
        </label>
        <input type='search' id='searchAside' placeholder='Puesto, empresa o palabra clave' className={styles.searchInput} />
        <label className={styles.searchSubmit}>
          <ArrowRight size='small' />
          <input type='submit' value='' />
        </label>
      </fieldset>
      <label className={styles.searchGroupAi}>
        <span>
          Busqueda con AI
          <InfoIcon size='small' />
        </span>
        <input type='checkbox' name='searchAi' />
        <ToggleOnIcon />
      </label>
    </form>
  )
}
