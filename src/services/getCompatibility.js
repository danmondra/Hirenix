export async function getCompatibility(offerId) {
  try {
    const res = await fetch('/compatibility', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        offerId
      })
    })
    return await res.json()
  } catch(e) {
    return e
  }
}
