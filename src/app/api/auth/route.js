import { NextResponse } from 'next/server'

const redirectUri = process.env.INFOJOBS_REDIRECT_URI
const clientSecret = process.env.INFOJOBS_CLIENTSECRET
const clientId = process.env.INFOJOBS_CLIENTID

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  const res = await fetch(`
          https://www.infojobs.net/oauth/
          authorize?grant_type=authorization_code
          &client_id=${clientId}
          &client_secret=${clientSecret}
          &code=${code}
          &redirect_uri=${redirectUri}`, {
    method: 'POST'
  })
  const token = await res.json()
  const tokenEncoded = JSON.stringify(encodeURI(token))

  const response = NextResponse.json({ msg: 'success' })
  response.cookies.set({
    name: 'userProfileGenerated',
    value: tokenEncoded,
    maxAge: 60 * 60 * 24 * 365
  })

  return response
}
