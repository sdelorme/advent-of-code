import { readFile } from 'fs'
import { findSimilarityScore } from './simScore.js'

const processInput = (filePath) => {
  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err)
      return
    }

    const result = findSimilarityScore(data)

    console.log('Total sim score:', result)
  })
}

const filePath = process.argv[2]

if (filePath) {
  processInput(filePath)
} else {
  console.error('sim score brokeeeee')
}
