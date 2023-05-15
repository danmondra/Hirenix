import Link from 'next/link'

export function HeaderLanding() {
  return (
    <header className='headerLandingPage'>
      <div className='container containerHeader'>
        <div>
          <Link href='/' className='logoLink'>
            <img src='/icon.png' alt='Logo of Hirenix' />
            <h2>Hirenix</h2>
          </Link>
        </div>
        <nav className='navigation'>
          <Link href='/'>Inicio</Link>
          <Link href='/explorar'>Explorar</Link>
          <Link href='/lab'>Laboratorio</Link>
          <Link href='/reclutar'>Reclutar</Link>
        </nav>
        <div className='loginContainer'>
          <button className='login'>Ingresar</button>
          <button className='register'>Registrarse</button>
        </div>
      </div>
    </header>
  )
}
