import randomNumbers from "../../Shared/random-numbers";

describe("Generate random numbers", () => {
    test("random numbers array length 6", () => {
        expect(randomNumbers(6, 1,49).length).toBe(6);
    })

    test("random numbers array length 7", () => {
        expect(randomNumbers(7, 1,49).length).toBe(7);
    })

    test("random numbers array length 8", () => {
        expect(randomNumbers(8, 1,49).length).toBe(8);
    })

    test("random numbers array length 9", () => {
        expect(randomNumbers(9, 1,49).length).toBe(9);
    })

});