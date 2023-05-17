import Link from 'next/link'
import { ArrowRight } from './icons'

export function MainLink() {
  return (
    <Link href='/explorar' className='linkExplore'>
      Explorar empleos
      <ArrowRight size='medium' />
    </Link>
  )
}
