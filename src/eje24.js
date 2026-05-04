function binarySearch(array, value) {
    if (array.length === 0) {
        throw new Error("El vector no puede estar vacío");
    }

    // Validar que esté ordenado
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            throw new Error("El vector debe estar ordenado");
        }
    }

    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (array[medio] === value) {
            return medio;
        }

        if (array[medio] < value) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return -1;
}

export { binarySearch };
