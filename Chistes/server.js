const express = require('express');
const app = express();

//Inicializar base de datos
require('./server/config/mongoose.config');

//Poder usar URLS y json

app.use(express.json(), express.urlencoded({extended: true}));

//Importar rutas
const misRutas = require("./server/routes/joke.routes");
misRutas(app);

//Ejecutamos el server
app.listen(8000, () =>{
    console.log("Servidor corriendo");
})
