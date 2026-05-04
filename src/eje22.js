// Función pura (la que se testea)
function dotProduct(vectorA, vectorB) {
    if (vectorA.length !== vectorB.length) {
        throw new Error("Los vectores deben tener la misma longitud");
    }

    let total = 0;

    for (let i = 0; i < vectorA.length; i++) {
        total += vectorA[i] * vectorB[i];
    }

    return total;
}

export { dotProduct };