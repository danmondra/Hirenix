'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import exploreStyles from '@/styles/explore.module.css'
import { getToken } from '@/services/getToken'
import { UserAccountIcon } from '../icons/icons'
import { clientId, redirectUri, scope } from '@/consts'

export function Login({ tokenSaved }) {
  const searchParams = useSearchParams()
  const [user, setUser] = useState({})
  const code = searchParams.get('code')
  const router = useRouter()

  useEffect(() => {
    const token = async () => await getToken()

    if(code) {
      token()
      router.replace('')
    }
  }, [])

  useEffect(() => {
    if(!tokenSaved) return
    const getUser = async () => {
      try {
        const res = await fetch('/api/user')
        const data = await res.json()
        setUser(data)
      } catch(e) {
        document.cookie = 'userProfileGenerated' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      }
    }

    getUser()
  }, [])

  return (
    <div className='loginContainer'>
      {tokenSaved
        ? <>
          <Link href='/descubrir-puesto' className={`${exploreStyles.btnUser} ${exploreStyles.btnUserLanding}`}>
            {user?.name}
            <UserAccountIcon size='medium' />
          </Link>
          </>
        : <>
          <a
            className='login'
            href={`https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=${scope}&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`}
          >
            Ingresar
          </a>
          <a href='https://www.infojobs.net/candidate/candidate-login/candidate-login.xhtml' className='register'>Registrarse</a>
          </>}
    </div>
  )
}
