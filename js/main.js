import { fnMatrizTranspuesta } from "./eje21UI.js";
import { fnProductoPunto } from "./eje22UI.js";
import { fnConvolucionVectores } from "./eje23UI.js";
import { fnBusquedaBinaria } from "./eje24UI.js";
import { fnRotarVector } from "./eje25UI.js";

const operacionSelect = document.getElementById("operacion");
const resultadosDiv = document.getElementById("resultados");
const ejecutar = document.getElementById("ejecutar");

//botón test
const btnTests = document.getElementById("verTests");
const testResultados = document.getElementById("testResultados");

function calcular() {

    const operacion = operacionSelect.value;

    switch (operacion) {

        case "eje21":
            fnMatrizTranspuesta();
            break;

        case "eje22":
            fnProductoPunto();
            break;

        case "eje23":
            fnConvolucionVectores();
            break;

        case "eje24":
            fnBusquedaBinaria();
            break;

        case "eje25":
            fnRotarVector();
            break;

        default:
            mostrarResultado("Selecciona una opción válida", "error");
    }
}

function mostrarResultado(mensaje, tipo = "success") {
    resultadosDiv.textContent = mensaje;
    resultadosDiv.className = `result ${tipo}`;
}

ejecutar.addEventListener("click", calcular);

console.log("Usa el selector y el botón para ejecutar");

//Botón test

btnTests.onclick = async () => {

    const opcion = document.getElementById("operacion").value;

    if (!opcion) {
        testResultados.innerHTML = "Selecciona un ejercicio primero";
        return;
    }

    testResultados.innerHTML = "Cargando tests...";

    try {
        const res = await fetch("http://localhost:3000/run-tests");
        const data = await res.json();

        // 🔥 FILTRAR SOLO EL EJERCICIO
        const filtrados = data.testResults.filter(test =>
            test.name.includes(opcion)
        );

        let html = `<h4>Tests de ${opcion}</h4>`;

        if (filtrados.length === 0) {
            html += "No hay tests para este ejercicio";
        } else {

            filtrados.forEach(test => {

                const nombreArchivo = test.name.split("\\").pop();

                html += `<br>📁 ${nombreArchivo} passed<br>`;

                test.assertions.forEach(a => {
                    html += `➡️ ${a.title} → ${a.status}<br>`;
                });

            });
        }

        testResultados.innerHTML = html;

    } catch (error) {
        console.error(error);
        testResultados.innerHTML = "Error al obtener los tests";
    }
};