import { Logo } from './logo'
import { NavigationLinks } from './navigationLinks'
import { Menu } from './icons'
import { Login } from './login'

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
          <Menu />
        </button>
      </div>
    </header>
  )
}
