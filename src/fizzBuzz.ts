class fizzBuzz {

  public evaluate(num: number) {
    return this.isZero(num) ? "0"
      : this.isMultipleOf(num, 3 * 5) ? "FizzBuzz"
        : this.isMultipleOf(num, 5) ? "Buzz"
          : this.isMultipleOf(num, 3) ? "Fizz"
            : num + ""
  }

  private isZero(num: number): boolean {
    return num === 0
  }

  private isMultipleOf(num: number, divisor: number): boolean {
    return num % divisor === 0
  }

}

export default new fizzBuzz()