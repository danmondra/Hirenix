'use client'

import { useRouter } from 'next/navigation'

export function Logout() {
  const router = useRouter()

  const handleClick = () => {
    document.cookie = 'userTokenInfojobs' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    router.refresh()
  }

  return (
    <button className='register logout' type='button' onClick={handleClick}>Cerrar Sesión</button>
  )
}
