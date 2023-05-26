const URL = `${process.env.INFOJOBS_API}/9/offer`
const clientId = process.env.INFOJOBS_CLIENTID
const clientSecret = process.env.INFOJOBS_CLIENTSECRET
const credentials = `${clientId}:${clientSecret}`
const encodedCredentials = Buffer.from(credentials).toString('base64')

export async function getInfojobsOffers(page = 1, maxResults = 15) {
  // TODO --- Disable cache, try with cache: 'no-cache' o 'no-store'
  const URLTransformed = `${URL}?page=${page}&maxResults=${maxResults}`

  const res = await fetch(URLTransformed, {
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
