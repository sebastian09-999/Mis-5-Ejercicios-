import { calculateConvolution } from "../src/eje23.js";

function fnConvolucionVectores() {

    let html = `
        <label>Vector X:</label>
        <input type="text" id="vectorXInput" placeholder="Ej: 1,2,3">

        <label>Vector Y:</label>
        <input type="text" id="vectorYInput" placeholder="Ej: 4,5">

        <button id="btnConvolucion23">Calcular Convolución</button>

        <p id="resultado23"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    document.getElementById("btnConvolucion23").onclick = function () {

        let textoX = document.getElementById("vectorXInput").value.trim();
        let textoY = document.getElementById("vectorYInput").value.trim();

        if (textoX === "" || textoY === "") {
            document.getElementById("resultado23").innerHTML =
                "Ingresa ambos vectores.";
            return;
        }

        let vectorX = textoX.split(",").map(n => parseFloat(n.trim()));
        let vectorY = textoY.split(",").map(n => parseFloat(n.trim()));

        if (vectorX.some(isNaN) || vectorY.some(isNaN)) {
            document.getElementById("resultado23").innerHTML =
                "Todos los valores deben ser números válidos.";
            return;
        }

        let resultado = calculateConvolution(vectorX, vectorY);

        document.getElementById("resultado23").innerHTML =
            `Resultado de la convolución:<br>[ ${resultado.join(", ")} ]`;
    };

    return "✅";
}

export { fnConvolucionVectores };