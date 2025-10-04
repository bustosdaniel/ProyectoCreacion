// importar dependencias principales
const express = require("express"); // framework para el servidor
const morgan = require("morgan");   // logger de peticiones http
const cors = require("cors");       // habilitar cors para consumir la api desde otros clientes
require("dotenv").config();         // leer variables de entorno del archivo .env


// importar las rutas
const routes = require("./routes");
const { connectDB } = require("./config/db");
const app = express(); // inicializar la aplicacion express


// middlewares: funciones que se ejecutan antes de llegar a las rutas
app.use(cors());             // permite llamadas desde otras aplicaciones o dominios
app.use(morgan("dev"));      // muestra en consola cada peticion (GET, POST, etc.)
app.use(express.json());     // permite recibir datos en formatojson en el body


// registrar las rutas principales
app.use("/", routes);


// definir el puerto desde el archivo .env o usar 3000 por defecto
const PORT = process.env.PORT || 3000;
connectDB();

// levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});