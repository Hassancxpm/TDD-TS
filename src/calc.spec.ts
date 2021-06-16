import calc from "./calc"

describe("Calculations", () => {

    test("should return 10 for add(6, 4)", () => {
        expect(calc.add(6, 4)).toBe(10)
    })

    test("should return 4 for mutliply(2, 2)", () => {
        expect(calc.mutliply(2, 2)).toBe(4)
    })

    test("should return 1 for sub(2, 1)", () => {
        expect(calc.subtract(2, 1)).toBe(1)
    })

})

