import calculateColumns from "../../Shared/calculate-columns";

describe("calculateColumns - 6 number selection with 6 length of win column", () => {
    test("calculateColumns", () => {
        expect(calculateColumns([1,2,3,4,5,6], 6)).toStrictEqual([[1,2,3,4,5,6]])
    })
});

describe("calculateColumns - 7 number selection with 6 length of win column", () => {
    test("calculateColumns", () => {
        expect(calculateColumns([1,2,3,4,5,6,7], 6)).toStrictEqual([
            [ 1, 2, 3, 4, 5, 6 ],
            [ 1, 2, 3, 4, 5, 7 ],
            [ 1, 2, 3, 4, 6, 7 ],
            [ 1, 2, 3, 5, 6, 7 ],
            [ 1, 2, 4, 5, 6, 7 ],
            [ 1, 3, 4, 5, 6, 7 ],
            [ 2, 3, 4, 5, 6, 7 ]
        ])
    })
});

describe("calculateColumns - 8 number selection with 6 length of win column", () => {
    test("calculateColumns", () => {
        expect(calculateColumns([1,2,3,4,5,6,7,8], 6)).toStrictEqual([
            [ 1, 2, 3, 4, 5, 6 ], [ 1, 2, 3, 4, 5, 7 ],
            [ 1, 2, 3, 4, 5, 8 ], [ 1, 2, 3, 4, 6, 7 ],
            [ 1, 2, 3, 4, 6, 8 ], [ 1, 2, 3, 4, 7, 8 ],
            [ 1, 2, 3, 5, 6, 7 ], [ 1, 2, 3, 5, 6, 8 ],
            [ 1, 2, 3, 5, 7, 8 ], [ 1, 2, 3, 6, 7, 8 ],
            [ 1, 2, 4, 5, 6, 7 ], [ 1, 2, 4, 5, 6, 8 ],
            [ 1, 2, 4, 5, 7, 8 ], [ 1, 2, 4, 6, 7, 8 ],
            [ 1, 2, 5, 6, 7, 8 ], [ 1, 3, 4, 5, 6, 7 ],
            [ 1, 3, 4, 5, 6, 8 ], [ 1, 3, 4, 5, 7, 8 ],
            [ 1, 3, 4, 6, 7, 8 ], [ 1, 3, 5, 6, 7, 8 ],
            [ 1, 4, 5, 6, 7, 8 ], [ 2, 3, 4, 5, 6, 7 ],
            [ 2, 3, 4, 5, 6, 8 ], [ 2, 3, 4, 5, 7, 8 ],
            [ 2, 3, 4, 6, 7, 8 ], [ 2, 3, 5, 6, 7, 8 ],
            [ 2, 4, 5, 6, 7, 8 ], [ 3, 4, 5, 6, 7, 8 ]
        ])
    })
});

describe("calculateColumns - 9 number selection with 6 length of win column", () => {
    test("calculateColumns", () => {
        expect(calculateColumns([1,2,3,4,5,6,7,8,9], 6)).toStrictEqual([
            [ 1, 2, 3, 4, 5, 6 ], [ 1, 2, 3, 4, 5, 7 ], [ 1, 2, 3, 4, 5, 8 ],
            [ 1, 2, 3, 4, 5, 9 ], [ 1, 2, 3, 4, 6, 7 ], [ 1, 2, 3, 4, 6, 8 ],
            [ 1, 2, 3, 4, 6, 9 ], [ 1, 2, 3, 4, 7, 8 ], [ 1, 2, 3, 4, 7, 9 ],
            [ 1, 2, 3, 4, 8, 9 ], [ 1, 2, 3, 5, 6, 7 ], [ 1, 2, 3, 5, 6, 8 ],
            [ 1, 2, 3, 5, 6, 9 ], [ 1, 2, 3, 5, 7, 8 ], [ 1, 2, 3, 5, 7, 9 ],
            [ 1, 2, 3, 5, 8, 9 ], [ 1, 2, 3, 6, 7, 8 ], [ 1, 2, 3, 6, 7, 9 ],
            [ 1, 2, 3, 6, 8, 9 ], [ 1, 2, 3, 7, 8, 9 ], [ 1, 2, 4, 5, 6, 7 ],
            [ 1, 2, 4, 5, 6, 8 ], [ 1, 2, 4, 5, 6, 9 ], [ 1, 2, 4, 5, 7, 8 ],
            [ 1, 2, 4, 5, 7, 9 ], [ 1, 2, 4, 5, 8, 9 ], [ 1, 2, 4, 6, 7, 8 ],
            [ 1, 2, 4, 6, 7, 9 ], [ 1, 2, 4, 6, 8, 9 ], [ 1, 2, 4, 7, 8, 9 ],
            [ 1, 2, 5, 6, 7, 8 ], [ 1, 2, 5, 6, 7, 9 ], [ 1, 2, 5, 6, 8, 9 ],
            [ 1, 2, 5, 7, 8, 9 ], [ 1, 2, 6, 7, 8, 9 ], [ 1, 3, 4, 5, 6, 7 ],
            [ 1, 3, 4, 5, 6, 8 ], [ 1, 3, 4, 5, 6, 9 ], [ 1, 3, 4, 5, 7, 8 ],
            [ 1, 3, 4, 5, 7, 9 ], [ 1, 3, 4, 5, 8, 9 ], [ 1, 3, 4, 6, 7, 8 ],
            [ 1, 3, 4, 6, 7, 9 ], [ 1, 3, 4, 6, 8, 9 ], [ 1, 3, 4, 7, 8, 9 ],
            [ 1, 3, 5, 6, 7, 8 ], [ 1, 3, 5, 6, 7, 9 ], [ 1, 3, 5, 6, 8, 9 ],
            [ 1, 3, 5, 7, 8, 9 ], [ 1, 3, 6, 7, 8, 9 ], [ 1, 4, 5, 6, 7, 8 ],
            [ 1, 4, 5, 6, 7, 9 ], [ 1, 4, 5, 6, 8, 9 ], [ 1, 4, 5, 7, 8, 9 ],
            [ 1, 4, 6, 7, 8, 9 ], [ 1, 5, 6, 7, 8, 9 ], [ 2, 3, 4, 5, 6, 7 ],
            [ 2, 3, 4, 5, 6, 8 ], [ 2, 3, 4, 5, 6, 9 ], [ 2, 3, 4, 5, 7, 8 ],
            [ 2, 3, 4, 5, 7, 9 ], [ 2, 3, 4, 5, 8, 9 ], [ 2, 3, 4, 6, 7, 8 ],
            [ 2, 3, 4, 6, 7, 9 ], [ 2, 3, 4, 6, 8, 9 ], [ 2, 3, 4, 7, 8, 9 ],
            [ 2, 3, 5, 6, 7, 8 ], [ 2, 3, 5, 6, 7, 9 ], [ 2, 3, 5, 6, 8, 9 ],
            [ 2, 3, 5, 7, 8, 9 ], [ 2, 3, 6, 7, 8, 9 ], [ 2, 4, 5, 6, 7, 8 ],
            [ 2, 4, 5, 6, 7, 9 ], [ 2, 4, 5, 6, 8, 9 ], [ 2, 4, 5, 7, 8, 9 ],
            [ 2, 4, 6, 7, 8, 9 ], [ 2, 5, 6, 7, 8, 9 ], [ 3, 4, 5, 6, 7, 8 ],
            [ 3, 4, 5, 6, 7, 9 ], [ 3, 4, 5, 6, 8, 9 ], [ 3, 4, 5, 7, 8, 9 ],
            [ 3, 4, 6, 7, 8, 9 ], [ 3, 5, 6, 7, 8, 9 ], [ 4, 5, 6, 7, 8, 9 ]
        ])
    })
});

describe("calculateColumns - 6 number selection with 5 length of win column", () => {
    test("calculateColumns", () => {
        expect(calculateColumns([1,2,3,4,5,6], 5)).toStrictEqual([
            [ 1, 2, 3, 4, 5 ],
            [ 1, 2, 3, 4, 6 ],
            [ 1, 2, 3, 5, 6 ],
            [ 1, 2, 4, 5, 6 ],
            [ 1, 3, 4, 5, 6 ],
            [ 2, 3, 4, 5, 6 ]
        ])
    })
});

describe("calculateColumns - 0 number selection with 6 length of win column", () => {
    test("calculateColumns", () => {
        expect(calculateColumns([], 6)).toStrictEqual([]);
    })
});