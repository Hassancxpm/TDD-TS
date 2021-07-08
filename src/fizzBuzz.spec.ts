import fizzBuzz from "./fizzBuzz"

describe("FizzBuzz", () => {

    it.each`
    num    | result
    ${15}  | ${"FizzBuzz"}
    ${45}  | ${"FizzBuzz"}
    ${60}  | ${"FizzBuzz"}
    ${150} | ${"FizzBuzz"}
    `("should return $result if we pass $num", ({ num, result }) => {
        expect(fizzBuzz.evaluate(num)).toEqual(result)
    })

    it.each`
    num   | result
    ${3}  | ${"Fizz"}
    ${6}  | ${"Fizz"}
    ${9}  | ${"Fizz"}
    ${99} | ${"Fizz"}
  `("should return $result if we pass $num", ({ num, result }) => {
      expect(fizzBuzz.evaluate(num)).toEqual(result)
    })

    it.each`
    num    | result
    ${5}   | ${"Buzz"}
    ${10}  | ${"Buzz"}
    ${50}  | ${"Buzz"}
    ${100} | ${"Buzz"}
    `("should return $result if we pass $num", ({ num, result }) => {
        expect(fizzBuzz.evaluate(num)).toEqual(result)
    })

    it.each`
    num   | result
    ${0}  | ${"0"}
    ${1}  | ${"1"}
    ${2}  | ${"2"}
    ${4}  | ${"4"}
    ${7}  | ${"7"}
    ${98} | ${"98"}
  `("should return $result if we pass $num", ({ num, result }) => {
        expect(fizzBuzz.evaluate(num)).toEqual(result)
    })

})