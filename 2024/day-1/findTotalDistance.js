export const findTotalDistance = (data) => {
  const lines = data.trim().split('\n')

  const firstColumn = []
  const secondColumn = []
  for (const line of lines) {
    const [col1, col2] = line.trim().split(/\s+/).map(Number)
    firstColumn.push(col1)
    secondColumn.push(col2)
  }
  firstColumn.sort((a, b) => a - b)
  secondColumn.sort((a, b) => a - b)

  let totalDistance = 0
  for (let i = 0; i < secondColumn.length; i++) {
    const distance = Math.abs(secondColumn[i] - firstColumn[i])
    totalDistance += distance
  }

  return totalDistance
}
