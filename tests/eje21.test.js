import { transposeMatrix } from "../src/eje21.js";

describe("Matriz Transpuesta", () => {

    test("Matriz 2x2", () => {
        expect(
            transposeMatrix([
                [1, 2],
                [3, 4]
            ])
        ).toEqual([
            [1, 3],
            [2, 4]
        ]);
    });

    test("Matriz 2x3", () => {
        expect(
            transposeMatrix([
                [1, 2, 3],
                [4, 5, 6]
            ])
        ).toEqual([
            [1, 4],
            [2, 5],
            [3, 6]
        ]);
    });

});