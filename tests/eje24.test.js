import { binarySearch } from "../src/eje24.js";

describe("Búsqueda Binaria", () => {

    test("Elemento encontrado", () => {
        expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
    });

    test("Elemento no encontrado", () => {
        expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
    });

    test("Primer elemento", () => {
        expect(binarySearch([1, 2, 3], 1)).toBe(0);
    });

    test("Último elemento", () => {
        expect(binarySearch([1, 2, 3], 3)).toBe(2);
    });

    test("Vector no ordenado (error)", () => {
        expect(() => binarySearch([3, 1, 2], 1))
            .toThrow("El vector debe estar ordenado");
    });

    test("Vector vacío (error)", () => {
        expect(() => binarySearch([], 1))
            .toThrow("El vector no puede estar vacío");
    });

});