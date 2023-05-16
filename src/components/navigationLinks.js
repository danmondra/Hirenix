import Link from 'next/link'

export function NavigationLinks() {
  return (
    <>
      <Link href='/'>Inicio</Link>
      <Link href='/explorar'>Explorar</Link>
      <Link href='/lab'>Laboratorio</Link>
      <Link href='/reclutar'>Reclutar</Link>
    </>
  )
}
