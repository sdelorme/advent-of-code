export const calculateSum = (input) => {
  let sum = 0

  const regex = /\d/g

  const strings = input.split('\n')

  for (const str of strings) {
    const numbers = str.match(regex)
    if (numbers) {
      
      if (numbers.length > 1) {
        const twoDigit = `${parseInt(numbers[0])}${parseInt(
          numbers[numbers.length - 1]
        )}`
        sum += parseInt(twoDigit)
      } else {
        const num = parseInt(numbers[0])
        sum += num * 11
      }
    }
  }

  return sum
}
