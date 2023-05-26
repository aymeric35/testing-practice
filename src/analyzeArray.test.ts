import { describe, it, expect } from 'vitest';
import { analyzeArray } from './analyzeArray';

describe('analyze Array', () => {
  it('should return an object', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBeTypeOf('object')
    expect(analyzeArray([])).toBeUndefined()
  })
  it('should return an object with the correct properties and values', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    })
    expect(analyzeArray([1, 2, 6])).toEqual({
      average: 3,
      min: 1,
      max: 6,
      length: 3
    })
    expect(analyzeArray([1, 2, 4, 82, 1, 4, 7, 3, 5, 4, 7, 8, 9, 6, 1])).toEqual({
      average: 9.6,
      min: 1,
      max: 82,
      length: 15
    })
    expect(analyzeArray([27, 3, 33, 29, 21, 17, 39, 16, 36, 0, 38, 8, 29, 30, 22, 35, 14, 21, 38, 4, 38, 38, 30, 3, 3, 34, 2, 16, 21, 17, 17, 17, 3, 36, 17, 35, 4, 20, 30, 32])).toEqual({
      average: 21.825,
      min: 0,
      max: 39,
      length: 40
    })
    expect(analyzeArray([0, 10, 15, 9, 4, 19, 8, 10, 16, 2, 11, 0, 3, 15, 6, 12, 10, 7, 9, 15])).toEqual({
      average: 9.05,
      min: 0,
      max: 19,
      length: 20
    })
    expect(analyzeArray([1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 1
    })
  })
  it('should only contain numbers', () => {
    expect(() => analyzeArray([1, 'a', 3, 4, 2, 6] as any)).toThrowError(/^Array can only contain numbers$/)
  })
})
