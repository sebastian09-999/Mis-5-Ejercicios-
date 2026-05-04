import { dotProduct } from "../src/eje22.js";

function fnProductoPunto() {

    let html = `
        <label>Vector A:</label>
        <input type="text" id="vectorAInput" placeholder="Ej: 1,2,3">

        <label>Vector B:</label>
        <input type="text" id="vectorBInput" placeholder="Ej: 4,5,6">

        <button id="btnProducto22">Calcular Producto Punto</button>

        <p id="resultado22"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    document.getElementById("btnProducto22").onclick = function () {

        let textoA = document.getElementById("vectorAInput").value.trim();
        let textoB = document.getElementById("vectorBInput").value.trim();

        if (textoA === "" || textoB === "") {
            document.getElementById("resultado22").innerText =
                "Ingresa ambos vectores.";
            return;
        }

        let vectorA = textoA.split(",").map(n => parseFloat(n.trim()));
        let vectorB = textoB.split(",").map(n => parseFloat(n.trim()));

        if (vectorA.some(isNaN) || vectorB.some(isNaN)) {
            document.getElementById("resultado22").innerText =
                "Todos los valores deben ser números válidos.";
            return;
        }

        if (vectorA.length !== vectorB.length) {
            document.getElementById("resultado22").innerText =
                "Los vectores deben tener la misma longitud.";
            return;
        }

        let resultado = dotProduct(vectorA, vectorB);

        document.getElementById("resultado22").innerText =
            `El producto punto es: ${resultado}`;
    };

    return "✅";
}

export { fnProductoPunto };