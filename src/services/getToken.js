export const getToken = async (code) => {
  try {
    const res = await fetch(`/api/auth?code=${code}`)
    const data = await res.json()
    console.log(data)

    if(data?.error) {
      throw new Error('Hubo un error en la autenticación')
    }

    return data
  } catch (e) {
    console.log(e)
    return e
  }
}
