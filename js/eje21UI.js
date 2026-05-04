import { transposeMatrix } from "../src/eje21.js";

function fnMatrizTranspuesta() {

    let html = `
        <label>
            Ingresa la matriz (filas con ';' y valores con ','):
        </label>
        <input type="text" id="matrixInput" placeholder="Ej: 1,2,3;4,5,6">

        <button id="btnTranspuesta21">Calcular Transpuesta</button>

        <p id="resultado21"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    document.getElementById("btnTranspuesta21").onclick = function () {

        let texto = document.getElementById("matrixInput").value.trim();

        if (texto === "") {
            document.getElementById("resultado21").innerHTML =
                "Ingresa una matriz válida.";
            return;
        }

        let filasStr = texto.split(";");
        let matriz = [];

        for (let f of filasStr) {
            let fila = f.split(",").map(n => parseFloat(n.trim()));

            if (fila.some(isNaN)) {
                document.getElementById("resultado21").innerHTML =
                    "Todos los valores deben ser números.";
                return;
            }

            matriz.push(fila);
        }

        let largo = matriz[0].length;

        if (matriz.some(fila => fila.length !== largo)) {
            document.getElementById("resultado21").innerHTML =
                "Todas las filas deben tener la misma cantidad de columnas.";
            return;
        }

        let resultado = transposeMatrix(matriz);

        document.getElementById("resultado21").innerHTML =
            `Matriz Transpuesta:<br>
            ${resultado.map(f => `[ ${f.join(", ")} ]`).join("<br>")}`;
    };

    return "✅";
}

export { fnMatrizTranspuesta };