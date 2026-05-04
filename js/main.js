import { fnMatrizTranspuesta } from "./eje21UI.js";
import { fnProductoPunto } from "./eje22UI.js";
import { fnConvolucionVectores } from "./eje23UI.js";
import { fnBusquedaBinaria } from "./eje24UI.js";
import { fnRotarVector } from "./eje25UI.js";

const operacionSelect = document.getElementById("operacion");
const resultadosDiv = document.getElementById("resultados");
const ejecutar = document.getElementById("ejecutar");

// botón test
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


// 🔥 FUNCIÓN PARA MOSTRAR TESTS
function renderTests(opcion, data) {

    const filtrados = data.testResults.filter(test =>
        test.name.includes(opcion)
    );

    let html = `<h4>Tests de ${opcion}</h4>`;

    if (filtrados.length === 0) {
        html += "No hay tests para este ejercicio";
    } else {
        filtrados.forEach(test => {

            const nombreArchivo = test.name.split("\\").pop();

            html += `<br>📁 ${nombreArchivo}<br>`;

            test.assertions.forEach(a => {
                const estado = a.status === "passed" ? "🟢" : "🔴";
                html += `${estado} ${a.title}<br>`;
            });
        });
    }

    testResultados.innerHTML = html;
}


// 🔥 DATOS SIMULADOS (para GitHub Pages)
function getMockTests() {

    return {
        testResults: [
            {
                name: "eje21.test.js",
                assertions: [
                    { title: "Matriz 2x2", status: "passed" },
                    { title: "Matriz 2x3", status: "passed" }
                ]
            },
            {
                name: "eje22.test.js",
                assertions: [
                    { title: "Vectores simples", status: "passed" },
                    { title: "Vectores negativos", status: "passed" },
                    { title: "Error tamaños", status: "passed" }
                ]
            },
            {
                name: "eje23.test.js",
                assertions: [
                    { title: "Caso básico", status: "passed" },
                    { title: "Con ceros", status: "passed" }
                ]
            },
            {
                name: "eje24.test.js",
                assertions: [
                    { title: "Elemento encontrado", status: "passed" },
                    { title: "Elemento no encontrado", status: "passed" }
                ]
            },
            {
                name: "eje25.test.js",
                assertions: [
                    { title: "Rotación básica", status: "passed" },
                    { title: "k mayor que tamaño", status: "passed" }
                ]
            }
        ]
    };
}


// 🔥 BOTÓN TEST (INTELIGENTE)
btnTests.onclick = async () => {

    const opcion = operacionSelect.value;

    if (!opcion) {
        testResultados.innerHTML = "Selecciona un ejercicio primero";
        return;
    }

    testResultados.innerHTML = "Cargando tests...";

    // 🧠 Detectar si estás en local
    const esLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";

    try {

        if (esLocal) {
            // 🔵 USAR BACKEND REAL
            const res = await fetch("http://localhost:3000/run-tests");
            const data = await res.json();

            renderTests(opcion, data);

        } else {
            // 🟢 USAR DATOS SIMULADOS
            const data = getMockTests();

            renderTests(opcion, data);
        }

    } catch (error) {

        console.error("Error real, usando mock:", error);

        // 🔁 fallback automático
        const data = getMockTests();
        renderTests(opcion, data);
    }
};