import { fizzbuzzResult } from "./type.fizzbuzz"

class fizzBuzz {
  public evaluate(num: number): fizzbuzzResult {
    return this.isZero(num)
      ? num
      : this.isMultipleOf(num, 15)
      ? "FizzBuzz"
      : this.isMultipleOf(num, 5)
      ? "Buzz"
      : this.isMultipleOf(num, 3)
      ? "Fizz"
      : num
  }

  private isZero(num: number): boolean {
    return num === 0
  }

  private isMultipleOf(num: number, divisor: number): boolean {
    return num % divisor === 0
  }
}

export default new fizzBuzz
