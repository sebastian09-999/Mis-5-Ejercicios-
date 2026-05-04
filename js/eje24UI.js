import { binarySearch } from "../src/eje24.js";

function fnBusquedaBinaria() {

    let html = `
        <label>Vector ordenado:</label>
        <input type="text" id="sortedArrayInput" placeholder="Ej: 1,3,5,7,9">

        <label>Valor a buscar:</label>
        <input type="text" id="searchValueInput" placeholder="Ej: 7">

        <button id="btnBusqueda24">Buscar</button>

        <p id="resultado24"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    document.getElementById("btnBusqueda24").onclick = function () {

        let textoArray = document.getElementById("sortedArrayInput").value.trim();
        let textoValor = document.getElementById("searchValueInput").value.trim();

        if (textoArray === "" || textoValor === "") {
            document.getElementById("resultado24").innerText =
                "Ingresa el vector y el valor.";
            return;
        }

        let array = textoArray.split(",").map(n => parseFloat(n.trim()));
        let value = parseFloat(textoValor);

        if (array.some(isNaN) || isNaN(value)) {
            document.getElementById("resultado24").innerText =
                "Todos deben ser números.";
            return;
        }

        try {
            let resultado = binarySearch(array, value);

            if (resultado === -1) {
                document.getElementById("resultado24").innerText =
                    `El valor ${value} no se encuentra.`;
            } else {
                document.getElementById("resultado24").innerText =
                    `Encontrado en posición: ${resultado}`;
            }

        } catch (error) {
            document.getElementById("resultado24").innerText = error.message;
        }
    };

    return "✅";
}

export { fnBusquedaBinaria };