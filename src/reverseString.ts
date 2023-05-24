export const reverseString = (s: string): string => {
  const split = s.split('')
  const result = []
  for (let i = split.length - 1; i >= 0; i--) {
    result.push(split[i])
  }

  return result.join('')
}
