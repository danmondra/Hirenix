import { objectToParams } from '@/utils/transformURLParams'
import offersMock from '@/mocks/offerResponse.json'

const URL = `${process.env.NEXT_PUBLIC_INFOJOBS_API}/9/offer`
const clientId = process.env.NEXT_PUBLIC_INFOJOBS_CLIENTID
const clientSecret = process.env.NEXT_PUBLIC_INFOJOBS_CLIENTSECRET
const credentials = `${clientId}:${clientSecret}`
const encodedCredentials = Buffer.from(credentials).toString('base64')

export async function getInfojobsOffers(filters = { page: 1, maxResults: 20 }) {
  const URLWithParams = `${URL}${objectToParams(filters)}`

  try {
    /* const res = await fetch(URLWithParams, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${encodedCredentials}`
      },
      cache: 'no-cache'
    })
    const offers = await res.json()
      */
    const offers = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(offersMock)
      }, 1000)
    })

    return offers 
  } catch(e) {
    console.log(e)
  }
}

export async function getOfferById(id) {
  const res = await fetch(`${URL}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${encodedCredentials}`
    }
  })

  return await res.json()
}
