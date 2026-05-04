import { calculateConvolution } from "../src/eje23.js";

describe("Convolución de vectores", () => {

    test("Caso básico", () => {
        expect(calculateConvolution([1, 2], [1, 1]))
            .toEqual([1, 3, 2]);
    });

    test("Vectores diferentes tamaños", () => {
        expect(calculateConvolution([1, 2, 3], [4, 5]))
            .toEqual([4, 13, 22, 15]);
    });

    test("Con ceros", () => {
        expect(calculateConvolution([0, 1], [2, 3]))
            .toEqual([0, 2, 3]);
    });

    test("Error con vector vacío", () => {
        expect(() => calculateConvolution([], [1, 2]))
            .toThrow("Los vectores no pueden estar vacíos");
    });

});