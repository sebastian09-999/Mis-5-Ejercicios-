// Función pura (NO usa DOM)
function transposeMatrix(matrix) {
    let filas = matrix.length;
    let columnas = matrix[0].length;

    let transpuesta = [];

    for (let i = 0; i < columnas; i++) {
        let nuevaFila = [];

        for (let j = 0; j < filas; j++) {
            nuevaFila.push(matrix[j][i]);
        }

        transpuesta.push(nuevaFila);
    }

    return transpuesta;
}

export { transposeMatrix };