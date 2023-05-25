import {describe, it, expect} from 'vitest';
import Calculator from './calculator';

describe('Calculator add method', () => {
  it('should return the result of an addition correctly', () => {
    expect(Calculator.add(1, 1)).toBe(2);
    expect(Calculator.add(10, 10)).toBe(20);
    expect(Calculator.add(100, 100)).toBe(200);
    expect(Calculator.add(1472568, 9112472)).toBe(10585040);
  })
  it('should calculate negative numbers correctly', () => {
    expect(Calculator.add(-1, -1)).toBe(-2);
    expect(Calculator.add(-1, 50)).toBe(49);
    expect(Calculator.add(-800, -42215)).toBe(-43015);
    expect(Calculator.add(-877, -22)).toBe(-899);
  })
  it('should work with decimals', () => {
    expect(Calculator.add(0.15, 7.15)).toBe(7.300000000000001)
    expect(Calculator.add(-0.10, 7.15)).toBe(7.050000000000001)
    expect(Calculator.add(20, 2.5)).toBe(22.5)
    expect(Calculator.add(-57, -2.3)).toBe(-59.3)
  })
})

describe('Calculator substract method', () => {
  it('should return the result of a substraction correctly', () => {
    expect(Calculator.substract(1, 1)).toBe(0);
    expect(Calculator.substract(20, 10)).toBe(10);
    expect(Calculator.substract(500, 200)).toBe(300);
    expect(Calculator.substract(9112472, 1472568)).toBe(7639904);
  })
  it('should substract negative numbers correctly', () => {
    expect(Calculator.substract(-1, -1)).toBe(0);
    expect(Calculator.substract(-1, 50)).toBe(-51);
    expect(Calculator.substract(-800, -42215)).toBe(41415);
    expect(Calculator.substract(-877, -22)).toBe(-855);
  })
  it('should work with decimals', () => {
    expect(Calculator.substract(0.15, 7.15)).toBe(-7)
    expect(Calculator.substract(-0.10, 7.15)).toBe(-7.25)
    expect(Calculator.substract(20, 2.5)).toBe(17.5)
    expect(Calculator.substract(-57, -2.3)).toBe(-54.7)
  })
})

describe('Calculator divide method', () => {
  it('should return the result of a division correctly', () => {
    expect(Calculator.divide(1, 1)).toBe(1);
    expect(Calculator.divide(20, 10)).toBe(2);
    expect(Calculator.divide(400, 200)).toBe(2);
    expect(Calculator.divide(50, 10)).toBe(5);
  })
  it('should divide negative numbers correctly', () => {
    expect(Calculator.divide(-1, -1)).toBe(1);
    expect(Calculator.divide(-20, 20)).toBe(-1);
    expect(Calculator.divide(-800, -200)).toBe(4);
    expect(Calculator.divide(-100, -10)).toBe(10);
  })
  it('should work with decimals', () => {
    expect(Calculator.divide(0.15, 7.15)).toBe(0.020979020979020976)
    expect(Calculator.divide(-0.10, 7.15)).toBe(-0.013986013986013986)
    expect(Calculator.divide(20, 2.5)).toBe(8)
    expect(Calculator.divide(-57, -2.3)).toBe(24.782608695652176)
  })
})
