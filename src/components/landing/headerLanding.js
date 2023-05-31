import { Logo } from '@/components/layout/logo'
import { NavigationLinks } from '@/components/layout/navigationLinks'
import { Login } from '@/components/layout/login'
import { MenuIcon } from '@/components/icons/icons'

export function HeaderLanding({ user, tokenSaved }) {
  return (
    <header className='headerLandingPage'>
      <div className='container containerHeader'>
        <div>
          <Logo />
        </div>
        <nav className='navigation'>
          <NavigationLinks />
        </nav>
        <Login tokenSaved={tokenSaved} />
        <button className='btnMenu' aria-label='Menú'>
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}
