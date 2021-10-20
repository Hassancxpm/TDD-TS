import fizzBuzz from "./fizzBuzz"
import { fizzbuzzResult } from "./type.fizzbuzz"

describe("FizzBuzz", () => {
  const cases = [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, "Fizz"],
    [4, 4],
    [5, "Buzz"],
    [15, "FizzBuzz"],
    [3, "Fizz"],
    [30, "FizzBuzz"],
    [91, 91]
  ]

  it.each(cases)(
    "should return %p if we pass %p",
    (firstCase: fizzbuzzResult, expectedResult: fizzbuzzResult) => {
      expect(fizzBuzz.evaluate(firstCase as number)).toEqual(expectedResult)
    }
  )
})
