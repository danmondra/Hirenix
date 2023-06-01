export async function getGPTResponse(apiRoute, body = {}) {
  try {
    const res = await fetch(`/api${apiRoute}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    return await res.json()
  } catch(e) {
    return e
  }
}
