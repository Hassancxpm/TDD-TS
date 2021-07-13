import fizzBuzz from "./fizzBuzz"

describe("FizzBuzz", () => {

    test("should return '0' if we pass 0", () => {
        expect(fizzBuzz.evaluate(0)).toEqual("0")
    })

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
    ${1}  | ${"1"}
    ${2}  | ${"2"}
    ${4}  | ${"4"}
    ${7}  | ${"7"}
    ${98} | ${"98"}
    `("should return $result if we pass $num", ({ num, result }) => {
        expect(fizzBuzz.evaluate(num)).toEqual(result)
    })

})