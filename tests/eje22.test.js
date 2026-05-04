import { dotProduct } from "../src/eje22.js";

describe("Producto Punto", () => {

    test("Vectores simples", () => {
        expect(dotProduct([1, 2, 3], [4, 5, 6])).toBe(32);
        // 1*4 + 2*5 + 3*6 = 32
    });

    test("Vectores con negativos", () => {
        expect(dotProduct([1, -2, 3], [4, 0, -1])).toBe(1);
        // 1*4 + (-2*0) + 3*(-1) = 4 + 0 - 3 = 1
    });

    test("Vectores de diferente tamaño (error)", () => {
        expect(() => dotProduct([1, 2], [1])).toThrow(
            "Los vectores deben tener la misma longitud"
        );
    });

});