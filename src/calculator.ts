export default class Calculator {
  static add(x: number, y: number): number {
    return x + y;
  }

  static substract(x: number, y: number): number {
    return x - y;
  }

  static divide(x: number, y: number): number {
    return x / y;
  }

  static multiply(x: number, y: number): number {
    return x * y;
  }

  static roundingDecimals(x: number, y: number): number {
    const xDecimal = x.toString().split('.')[1]
    const yDecimal = y.toString().split('.')[1]
    const result = (longest: number): number => {
      return Math.round((x + y + Number.EPSILON) * Math.pow(10, longest)) / Math.pow(10, longest)
    }
    if (xDecimal === undefined) {
      return result(yDecimal.length)
    }
    if (yDecimal === undefined) {
      return result(xDecimal.length)
    }
    const longest = xDecimal > yDecimal ? xDecimal : yDecimal
    return result(longest.length);
  }

  static round(x: number, decimalLength = 0): number {
    return Math.round((x + Number.EPSILON) * Math.pow(10, decimalLength)) / Math.pow(10, decimalLength)
  }
}
