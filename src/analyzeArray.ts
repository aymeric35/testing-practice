export const analyzeArray = (input: number[]): object | undefined => {
  if (!input.length) return;
  if (!Array.isArray(input)) throw new Error('Parameter is not an array')
  if (!input.every(e => typeof e === 'number')) throw new Error('Array can only contain numbers')

  const average = input.reduce((a, b) => a + b, 0) / input.length
  const min = Math.min(...input)
  const max = Math.max(...input)
  const length = input.length
  
  return {
    average: average,
    min: min,
    max: max,
    length: length
  }
}
