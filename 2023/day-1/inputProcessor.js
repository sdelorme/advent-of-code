import { readFile } from 'fs'
import { calculateSum } from './inputSum.js'

function processFile(filePath) {
  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err)
      return
    }

    const result = calculateSum(data)

    console.log('Result:', result)
  })
}

const filePath = process.argv[2]

if (filePath) {
  processFile(filePath)
} else {
  console.error('Usage: node textProcessing.js <file-path>')
}
