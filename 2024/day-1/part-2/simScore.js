// create a hash map of the left column values
// iterate through the right column
// if lefHash[rightColumnVal] exists, add to it's count
// iterate through the hash --map into new array by multiplying its key by it's value

export const findSimilarityScore = (data) => {
  const lines = data.trim().split('\n')

  const firstColumn = []
  const secondColumn = []
  for (const line of lines) {
    const [col1, col2] = line.trim().split(/\s+/).map(Number)
    firstColumn.push(col1)
    secondColumn.push(col2)
  }

  const leftHash = new Map()
  firstColumn.forEach((key) => {
    leftHash.set(key, 0)
  })

  secondColumn.forEach((key) => {
    if (leftHash.has(key)) {
      leftHash.set(key, leftHash.get(key) + 1)
    }
  })

  let similiarityScore = 0
  leftHash.forEach((key, value) => {
    similiarityScore += key * value
  })

  return similiarityScore
}
