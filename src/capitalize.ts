export const capitalize = (s: string): string => {
  const firstLetter = s.charAt(0);
  return s.replace(firstLetter, firstLetter.toUpperCase())
}
