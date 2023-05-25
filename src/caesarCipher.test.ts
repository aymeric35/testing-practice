import {describe, it, expect} from 'vitest';
import CaesarCipher from './caesarCipher';

describe('Encode method', () => {
  it('should encode', () => {
    expect(CaesarCipher.encode('Hello my name is Arnaud', 1)).toBe('ifmmp nz obnf jt bsobve')
    expect(CaesarCipher.encode('It was windy and my hair was blowing all over my face.', 5)).toBe('ny bfx bnsid fsi rd mfnw bfx gqtbnsl fqq tajw rd kfhj.')
    expect(CaesarCipher.encode('You are, hands down, the biggest idiot I have ever met.', 14)).toBe('mci ofs, vobrg rckb, hvs pwuusgh wrwch w vojs sjsf ash.')
    expect(CaesarCipher.encode('It was not a big store, right?', 25)).toBe('hs vzr mns z ahf rsnqd, qhfgs?')
  })
})

describe('Decode method', () => {
  it('should decode', () => {
    expect(CaesarCipher.decode('ifmmp nz obnf jt bsobve', 1)).toBe('hello my name is arnaud')
    expect(CaesarCipher.decode('ny bfx bnsid fsi rd mfnw bfx gqtbnsl fqq tajw rd kfhj.', 5)).toBe('it was windy and my hair was blowing all over my face.')
    expect(CaesarCipher.decode('mci ofs, vobrg rckb, hvs pwuusgh wrwch w vojs sjsf ash.', 14)).toBe('you are, hands down, the biggest idiot i have ever met.')
    expect(CaesarCipher.decode('hs vzr mns z ahf rsnqd, qhfgs?', 25)).toBe('it was not a big store, right?')
  })
})
