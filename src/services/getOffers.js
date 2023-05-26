import { objectToParams } from '@/utils/transformURLParams'

const URL = `${process.env.INFOJOBS_API}/9/offer`
const clientId = process.env.INFOJOBS_CLIENTID
const clientSecret = process.env.INFOJOBS_CLIENTSECRET
const credentials = `${clientId}:${clientSecret}`
const encodedCredentials = Buffer.from(credentials).toString('base64')

export async function getInfojobsOffers(filters = { page: 1, maxResults: 20 }) {
  const URLWithParams = `${URL}${objectToParams(filters)}`

  const res = await fetch(URLWithParams, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${encodedCredentials}`
    },
    cache: 'no-cache'
  })

  return await res.json()
}

export async function getOfferById(id) {
  const res = await fetch(`${URL}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${encodedCredentials}`
    },
    cache: 'force-cache',
    next: {
      revalidate: 3600
    }
  })

  return await res.json()
}
