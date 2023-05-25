import { Logo } from '@/components/layout/logo'
import { NavigationLinks } from '@/components/layout/navigationLinks'
import { Login } from '@/components/layout/login'
import { MenuIcon } from '@/components/icons/icons'

export function HeaderLanding() {
  return (
    <header className='headerLandingPage'>
      <div className='container containerHeader'>
        <div>
          <Logo />
        </div>
        <nav className='navigation'>
          <NavigationLinks />
        </nav>
        <Login />
        <button className='btnMenu' aria-label='Menú'>
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}
