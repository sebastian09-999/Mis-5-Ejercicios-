import express from "express";
import { exec } from "child_process";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/run-tests", (req, res) => {

    exec("npm test -- --json --silent", (error, stdout, stderr) => {

        if (error && !stdout) {
            return res.status(500).json({
                error: stderr || "Error ejecutando tests"
            });
        }

        try {
            // 🔥 LIMPIAR salida (quitar texto antes del JSON)
            const jsonStart = stdout.indexOf("{");
            const cleanJson = stdout.slice(jsonStart);

            const data = JSON.parse(cleanJson);

            res.json({
                totalTests: data.numTotalTests,
                passed: data.numPassedTests,
                failed: data.numFailedTests,

                // 🔥 AQUÍ ESTÁ LO NUEVO IMPORTANTE
                testResults: data.testResults.map(test => ({
                    name: test.name,
                    status: test.status,

                    // 👇 TESTS INDIVIDUALES
                    assertions: test.assertionResults.map(a => ({
                        title: a.title,
                        status: a.status
                    }))
                }))
            });

        } catch (err) {
            console.log("❌ Error al parsear JSON");
            console.log("STDOUT:", stdout);

            res.status(500).json({
                error: "Error parsing Jest output"
            });
        }
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});