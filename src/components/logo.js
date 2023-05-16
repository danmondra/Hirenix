import Link from 'next/link'

export function Logo() {
  return (
    <Link href='/' className='logoLink'>
      <img src='/icon.png' alt='Logo of Hirenix' />
      <h2>Hirenix</h2>
    </Link>
  )
}
