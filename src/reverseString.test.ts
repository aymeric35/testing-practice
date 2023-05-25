import {describe, it, expect} from 'vitest';
import { reverseString } from './reverseString';

describe('reverse a string', () => {
  it('should reverse a string', () => {
    expect(reverseString('hello my name is Arthur.')).toBe('.ruhtrA si eman ym olleh')
    expect(reverseString('She woke up to the sound of the radio blaring.')).toBe('.gniralb oidar eht fo dnuos eht ot pu ekow ehS')
    expect(reverseString('!!!Give me some salt')).toBe('tlas emos em eviG!!!')
  })
  it('should return an empty string when an empty string is provided as an argument', () => {
    expect(reverseString('')).toBe('');
  })
})
