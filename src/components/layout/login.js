'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const scope = process.env.INFOJOBS_SCOPE
const redirectUri = process.env.INFOJOBS_REDIRECT_URI
const clientSecret = process.env.INFOJOBS_CLIENTSECRET
const clientId = process.env.INFOJOBS_CLIENTID

export function Login({ tokenSaved }) {
  const [token, setToken] = useState(tokenSaved ?? '')
  const searchParams = useSearchParams()
  const test = searchParams.get('test')
  const router = useRouter()

  useEffect(() => {
    console.log('effect')
    const getAuth = async () => {
      try {
        const res = await fetch(`
          https://www.infojobs.net/oauth/
          authorize?grant_type=authorization_code
          &client_id=${clientId}
          &client_secret=${clientSecret}
          &code=${searchParams?.code}
          &redirect_uri=${redirectUri}`, {
          method: 'POST'
        })
        const data = await res.json()

        if(data?.error) {
          throw new Error('Hubo un error en la autenticación')
        }

        document.cookie = `userTokenInfojobs=${JSON.stringify(encodeURIComponent(data.access_token))}`
        setToken(data.access_token)
        router.refresh()
      } catch (e) {
        console.log(e)
      }
    }

    if(token) return
    if(searchParams?.code) {
      console.log('getAuth')
      getAuth()
    }
  }, [])

  return (
    <div className='loginContainer'>
      {token
        ? 'Juan'
        : <>
          <a
            className='login'
            href={test ? `https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=${scope}&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code` : ''}
          >
            Ingresar
          </a>
          <a className='register'>Registrarse</a>
          </>}
    </div>
  )
}
