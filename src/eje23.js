function calculateConvolution(x, y) {
    if (x.length === 0 || y.length === 0) {
        throw new Error("Los vectores no pueden estar vacíos");
    }

    let n = x.length;
    let m = y.length;

    let result = new Array(n + m - 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            result[i + j] += x[i] * y[j];
        }
    }

    return result;
}

export { calculateConvolution };