import { rotateArray } from "../src/eje25.js";

function fnRotarVector() {

    let html = `
        <label>Vector:</label>
        <input type="text" id="rotateInput" placeholder="Ej: 1,2,3,4,5">

        <label>Posiciones (k):</label>
        <input type="number" id="rotateKInput" placeholder="Ej: 2">

        <button id="btnRotar25">Rotar Vector</button>

        <p id="resultado25"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    document.getElementById("btnRotar25").onclick = function () {

        let texto = document.getElementById("rotateInput").value.trim();
        let kTexto = document.getElementById("rotateKInput").value.trim();

        if (texto === "" || kTexto === "") {
            document.getElementById("resultado25").innerText =
                "Ingresa el vector y k.";
            return;
        }

        let array = texto.split(",").map(n => parseFloat(n.trim()));
        let k = parseInt(kTexto);

        if (array.some(isNaN) || isNaN(k)) {
            document.getElementById("resultado25").innerText =
                "Los valores deben ser numéricos.";
            return;
        }

        try {
            let resultado = rotateArray(array, k);

            document.getElementById("resultado25").innerText =
                `Vector rotado: [ ${resultado.join(", ")} ]`;

        } catch (error) {
            document.getElementById("resultado25").innerText = error.message;
        }
    };

    return "✅";
}

export { fnRotarVector };