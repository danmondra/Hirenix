import styles from '@/app/layout.module.css'
import Link from 'next/link'

export function HeaderLanding() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div>
          <Link href='/' className={styles.logoLink}>
            <img src='/icon.png' alt='Logo of Hirenix' />
            <h2>Hirenix</h2>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <Link href='/'>Inicio</Link>
          <Link href='/explorar'>Explorar</Link>
          <Link href='/lab'>Laboratorio</Link>
          <Link href='/reclutar'>Reclutar</Link>
        </nav>
        <div className={styles.loginContainer}>
          <button className={styles.login}>Ingresar</button>
          <button className={styles.register}>Registrarse</button>
        </div>
      </div>
    </header>
  )
}
