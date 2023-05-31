import { NextResponse } from 'next/server'

export async function POST(req) {
  const { auth } = await req.json()

  const authEncoded = encodeURIComponent(JSON.stringify(auth))

  const response = NextResponse.json(authEncoded)

  response.cookies.set({
    name: 'userAuthInfojobs',
    value: authEncoded,
    maxAge: 60 * 60 * 24 * 365
  })

  return response
}
