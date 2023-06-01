import { NextResponse } from 'next/server'

const URL = `${process.env.NEXT_PUBLIC_INFOJOBS_API}/6/candidate`
const clientId = process.env.NEXT_PUBLIC_INFOJOBS_CLIENTID
const clientSecret = process.env.NEXT_PUBLIC_INFOJOBS_CLIENTSECRET
const credentials = `${clientId}:${clientSecret}`
const encodedCredentials = Buffer.from(credentials).toString('base64')

export async function POST(req) {
  const userTokenInfojobs = req.cookies.get('userTokenInfojobs')
  const token = JSON.parse(decodeURIComponent(userTokenInfojobs?.value))

  console.log('entrando')
  const res = await fetch(`${URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${encodedCredentials},Bearer ${token.access_token}`
    }
  })
  const data = await res.json()

  return NextResponse.json(data)
}
