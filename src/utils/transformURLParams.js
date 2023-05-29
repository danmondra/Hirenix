export const objectToParams = (params) => {
  const URLWithParams = new URLSearchParams()

  const paramsToArray = Object.entries(params)
  const cleanedParams = paramsToArray.filter(param => param[1].length > 0)

  cleanedParams.forEach(([key, value]) => {
    if(typeof value === 'object') {
      value.forEach(valueDeep => {
        URLWithParams.append(key, valueDeep)
      })
    } else {
      URLWithParams.append(key, value)
    }
  })

  return `?${URLWithParams.toString()}`
}
