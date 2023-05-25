export function timeSincePublication(date) {
  // Crear objetos Date usando los timestamps
  const date1 = Date.now()
  const date2 = new Date(date)

  // Calcular la diferencia en milisegundos
  const difference = Math.abs(date2 - date1)

  // Calcular la diferencia en minutos, horas, días y meses
  const seconds = Math.floor(difference / 1000)
  const minutes = Math.floor(difference / (1000 * 60))
  const hours = Math.floor(difference / (1000 * 60 * 60))
  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44))

  if (months > 0) return months === 1 ? `${months} mes` : `${months} meses`
  if (days > 0) return days === 1 ? `${days} día` : `${days} días`
  if (hours > 0) return hours === 1 ? `${hours} hora` : `${hours} horas`
  if (minutes > 0) return minutes === 1 ? `${minutes} minuto` : `${minutes} minutos`

  return `${seconds} segundos`
}
