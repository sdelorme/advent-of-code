// sort the lists
// smallest on left list compared to smallest on right list
// store the distance total
// return sum of all distances
import { readFile } from 'fs'
import { findTotalDistance } from './findTotalDistance.js'

const processInput = (filePath) => {
  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err)
      return
    }

    const result = findTotalDistance(data)

    console.log('Total distance:', result)
  })
}

const filePath = process.argv[2]

if (filePath) {
  processInput(filePath)
} else {
  console.error('Total distance sum did not work bruh')
}
