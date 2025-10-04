// importar express
const express = require("express");
const mongoose = require("mongoose");

// crear un enrutador (router) para manejar las rutas de la aplicacion
const router = express.Router();

const states = { 0: "Disconnected", 1: "Connected", 2: "Connecting", 3: "Disconnecting" };

// ruta de prueba (health check)
// cuando un cliente haga GET en /health
// se responde con un json indicando que el servicio esta activo
router.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: process.env.APP_NAME || "API Catalogo",
    db: states[mongoose.connection.readyState] 
  });
});


// exportar el router para que pueda ser usado en server.js
module.exports = router;