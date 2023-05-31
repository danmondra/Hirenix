'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavigationLinks({ user }) {
  console.log({ user })

  const pathname = usePathname()

  const paths = {
    explorar: ['/explorar', '/search'],
    laboratorio: ['/laboratorio'],
    descubrir: ['/descubrir']
  }

  const checkPathname = (path) => path.some(p => pathname.startsWith(p))

  return (
    <>
      <Link href='/'>Inicio</Link>
      <Link href='/explorar' className={checkPathname(paths.explorar) ? 'active' : ''}>Explorar</Link>
      <Link href='/laboratorio' className={checkPathname(paths.laboratorio) ? 'active' : ''}>Laboratorio</Link>
      <Link href='/descubrir-puesto' className={checkPathname(paths.descubrir) ? 'active' : ''}>Descubrir</Link>
    </>
  )
}
