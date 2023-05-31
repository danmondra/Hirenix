import { NextResponse } from 'next/server'

const redirectUri = process.env.INFOJOBS_REDIRECT_URI
const clientSecret = process.env.INFOJOBS_CLIENTSECRET
const clientId = process.env.INFOJOBS_CLIENTID

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  try {
    const res = await fetch(`https://www.infojobs.net/oauth/authorize?grant_type=authorization_code&client_id=${clientId}&client_secret=${encodeURI(clientSecret)}&code=${code}&redirect_uri=${redirectUri}`, {
      method: 'POST'
    })
    const token = await res.json()
    console.log(token)

    const tokenEncoded = encodeURIComponent(JSON.stringify(token))

    const response = NextResponse.json(token)
    response.cookies.set({
      name: 'userTokenInfojobs',
      value: tokenEncoded,
      maxAge: 60 * 60 * 24 * 365
    })

    return response
  } catch(e) {
    console.log(e)
    return NextResponse.json({ msg: 'Hubo un error', error: e })
  }
}
