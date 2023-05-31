'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

const scope = process.env.INFOJOBS_SCOPE
const redirectUri = process.env.INFOJOBS_REDIRECT_URI
const clientId = process.env.INFOJOBS_CLIENTID

export function Login({ tokenSaved }) {
  const searchParams = useSearchParams()
  const test = searchParams.get('test')
  const code = searchParams.get('code')
  const router = useRouter()

  useEffect(() => {
    if(tokenSaved) return
    const getAuth = async () => {
      try {
        const res = await fetch(`/api/auth?code=${code}`)
        const data = await res.json()

        if(data?.error) {
          throw new Error('Hubo un error en la autenticación')
        }

        router.refresh()
      } catch (e) {
        console.log(e)
      }
    }

    if(code) {
      console.log('getAuth')
      getAuth()
    }
  }, [])

  return (
    <div className='loginContainer'>
      {tokenSaved
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
