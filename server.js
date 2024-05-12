const app = require('./app')
const mongoose = require("mongoose");
require("dotenv").config();


const PORT = process.env.PORT || 3000;
const uriDb = process.env.DB_HOST;

// Conecta a MongoDB
mongoose.connect(uriDb)
  .then(() => {
    console.log("Database connection successful");
    // Inicia el servidor después de que la conexión a la base de datos se haya establecido correctamente
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message);
    // Aquí se podría decidir si quieres detener la ejecución de la aplicación en caso de error de conexión a la base de datos.
    // process.exit(1);
  });