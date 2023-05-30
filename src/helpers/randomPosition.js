export function randomPosition(max, avoid = []) {
  const randomNumber = parseInt(Math.random() * max)

  // Aseguramos que los números no se repitan
  if(avoid.includes(randomNumber)) {
    return randomPosition(max, avoid)
  }

  return randomNumber
}
