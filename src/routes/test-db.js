const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/papeleria_catalogo";

mongoose.connect(uri)
  .then(() => {
    console.log("Conexion exitosa a MongoDB");
    process.exit(0); // salir con exito
  })
  .catch(err => {
    console.error("Error al conectar a MongoDB:",
      err.message
    );
    process.exit(1); // salir con error
});