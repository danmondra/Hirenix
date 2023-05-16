import { Logo } from './logo'
import { NavigationLinks } from './navigationLinks'
import { Menu } from './icons'

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
        <div className='loginContainer'>
          <button className='login'>Ingresar</button>
          <button className='register'>Registrarse</button>
        </div>
        <button className='btnMenu'>
          <Menu />
        </button>
      </div>
    </header>
  )
}
