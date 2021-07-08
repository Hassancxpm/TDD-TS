class fizzBuzz {

  evaluate (num: number) {
    return num === 0 ? "0"
    : this.isMultipleOf(3 * 5, num) ? "FizzBuzz"
    : this.isMultipleOf(5, num) ? "Buzz"
    : this.isMultipleOf(3, num) ? "Fizz"
    : num + ""
  }

  private isMultipleOf (divisor: number, num: number): boolean {
    return num % divisor === 0
  }

}

export default new fizzBuzz()