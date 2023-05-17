import styles from '@/styles/explore.module.css'
import { ExploreBG } from '@/components/exploreBg'
import { Logo } from '@/components/logo'
import { ArrowRight, InfoIcon, SearchIcon, ToggleOnIcon, UserAccountIcon } from '@/components/icons'
import { Login } from '@/components/login'

export default function Explore() {
  return (
    <>
      <ExploreBG />
      <div className={styles.page}>
        <aside className={styles.aside}>
          <header className={styles.asideHeader}>
            <div className={styles.logoContainer}>
              <Logo />
              <button className={styles.btnUser}>
                <UserAccountIcon size='medium' />
              </button>
            </div>
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

                <ToggleOnIcon />
                <input type='checkbox' name='searchAi' />
              </label>
            </form>
          </header>
          <footer className='footerAside'>
            <Login />
          </footer>
        </aside>
        <main className={styles.main}>main</main>
      </div>
    </>
  )
}
