// src/config/db.js​

// conector a MongoDB usando mongoose​

const mongoose = require("mongoose");


async function connectDB() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("Falta MONGODB_URI en .env");
    }


    try {
        // mongoose 7+ no requiere opciones extra por defecto​
        await mongoose.connect(uri);
        console.log("MongoDB conectado");
    } catch (err) {

        console.error("Error conectando a MongoDB:", err.message);
        process.exit(1); // salir si no conecta​
    }

}




module.exports = { connectDB };