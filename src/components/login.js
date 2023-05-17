import Link from 'next/link'

export function Login() {
  return (
    <div className='loginContainer'>
      <Link href='/' className='login'>Ingresar</Link>
      <Link href='/' className='register'>Registrarse</Link>
    </div>
  )
}
