function rotateArray(array, k) {
    if (array.length === 0) {
        throw new Error("El vector no puede estar vacío");
    }

    let n = array.length;

    // Ajustar k (por si es mayor o negativo)
    k = k % n;
    if (k < 0) k += n;

    let resultado = new Array(n);

    for (let i = 0; i < n; i++) {
        let nuevaPos = (i + k) % n;
        resultado[nuevaPos] = array[i];
    }

    return resultado;
}

export { rotateArray };
