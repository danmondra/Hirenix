export function Login({ user, searchParams }) {
  const scope = process.env.INFOJOBS_SCOPE
  const redirectUri = process.env.INFOJOBS_REDIRECT_URI
  const clientId = process.env.INFOJOBS_CLIENTID
  console.log({ user })

  return (
    <div className='loginContainer'>
      <a
        className='login'
        href={searchParams?.test ? `https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=${scope}&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code` : ''}
      >
      Ingresar
      </a>
      <a className='register'>Registrarse</a>
    </div>
  )
}
