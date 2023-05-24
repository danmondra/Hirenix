import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons/icons'

export function MainLink() {
  return (
    <Link href='/explorar' className='linkExplore'>
      Explorar empleos
      <ArrowRightIcon size='medium' />
    </Link>
  )
}
