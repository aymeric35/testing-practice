export default class CaesarCipher {
  static encode(s: string, shift: number): string {
    const format = s.toLowerCase()
    const result = []
    for (let i = 0; i < s.length; i++) {
      if (format[i].match(/[a-z]/g)) {        
        result.push(CaesarCipher.nextChar(format[i], shift))
      } else {
        result.push(format[i])
      }
    }    
    return result.join('')
  }

  static decode(s: string, shift: number): string {
    const format = s.toLowerCase()
    const result = []
    for (let i = 0; i < s.length; i++) {
      if (format[i].match(/[a-z]/g)) {        
        result.push(CaesarCipher.prevChar(format[i], shift))
      } else {
        result.push(format[i])
      }
    }    
    return result.join('')
  }

  private static nextChar(c: string, shift: number): string {
    const lastCharCode = 122;
    const firstCharCode = 97;
    const shiftedPosition = c.charCodeAt(0) + shift
    if (shiftedPosition > lastCharCode) {
      return String.fromCharCode((firstCharCode + (shiftedPosition - lastCharCode)) - 1);
    }    
    return String.fromCharCode(shiftedPosition);
  }

  private static prevChar(c: string, shift: number): string {
    const lastCharCode = 122;
    const firstCharCode = 97;
    const shiftedPosition = c.charCodeAt(0) - shift
    if (shiftedPosition < firstCharCode) {
      return String.fromCharCode((shiftedPosition + (lastCharCode - firstCharCode)) + 1)
    }    
    return String.fromCharCode(shiftedPosition);
  }
}
