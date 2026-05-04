import { rotateArray } from "../src/eje25.js";

describe("Rotación de vector", () => {

    test("Rotación básica", () => {
        expect(rotateArray([1, 2, 3, 4, 5], 2))
            .toEqual([4, 5, 1, 2, 3]);
    });

    test("Rotación con k = 0", () => {
        expect(rotateArray([1, 2, 3], 0))
            .toEqual([1, 2, 3]);
    });

    test("k mayor que tamaño", () => {
        expect(rotateArray([1, 2, 3], 5))
            .toEqual([2, 3, 1]);
    });

    test("k negativo", () => {
        expect(rotateArray([1, 2, 3], -1))
            .toEqual([2, 3, 1]);
    });

    test("Vector vacío (error)", () => {
        expect(() => rotateArray([], 2))
            .toThrow("El vector no puede estar vacío");
    });

});