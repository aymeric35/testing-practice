import {describe, it, expect} from 'vitest';
import { capitalize } from './capitalize';

describe('Capitalize string', () => {
  it('should return a string with the first letter capitalized', () => {
    expect(capitalize('hello my name is Arthur.')).toBe('Hello my name is Arthur.');
    expect(capitalize('watch out!')).toBe('Watch out!');
  })
  it('should return an empty string when the input is itself an empty string', () => {
    expect(capitalize('')).toBe('');
  })
  it('should return the same input when the string starts with a special character or a number', () => {
    expect(capitalize('!!!!hello')).toBe('!!!!hello')
  })
})
