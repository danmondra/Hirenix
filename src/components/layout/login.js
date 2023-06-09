'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import exploreStyles from '@/styles/explore.module.css'

import { getToken } from '@/services/getToken'
import { clientId, redirectUri, scope } from '@/consts'

import { UserAccountIcon } from '@/components/icons/icons'

export function Login({ tokenSaved }) {
  const [user, setUser] = useState({})
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    const token = async () => {
      await getToken(code)
      const newUrl = window.location.href.split('?')[0]
      window.location.href = newUrl
    }

    if(tokenSaved) return
    if(code) {
      token()
    }
  }, [code, tokenSaved])

  useEffect(() => {
    if(!tokenSaved) return
    const getUser = async () => {
      try {
        const res = await fetch('/api/user/', {
          method: 'POST'
        })
        const data = await res.json()
        setUser(data)
      } catch(e) {
        document.cookie = 'userProfileGenerated' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      }
    }

    getUser()
  }, [tokenSaved])

  return (
    <div className='loginContainer'>
      {
        tokenSaved && user?.name
          ? <Link
              href='/descubrir-puesto'
              className={`
              ${exploreStyles.btnUser}
              ${exploreStyles.btnUserLanding}
            `}
            >
            {user?.name}
            <UserAccountIcon size='medium' />
            </Link>
          : <>

            <a
              className='login'
              href={`https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=${scope}&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`}
            >
              Ingresar
            </a>

            <a
              href='https://www.infojobs.net/candidate/candidate-login/candidate-login.xhtml'
              className='register'
            >
              Registrarse
            </a>

            </>
      }
    </div>
  )
}
