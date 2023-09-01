//URLS que se van a utilizar
//importar métodos

const BromaController = require ("../controllers/joke.controller")
//app es la encargada de consultar rutas
module.exports = app =>{
    app.get("/api/jokes",BromaController.muestraBromas);
    app.get("/api/jokes/:id", BromaController.muestraBroma);
    app.post("/api/jokes/new", BromaController.creaBroma);
    app.put("/api/jokes/update/:id", BromaController.actualizaBroma);
    app.delete("/api/jokes/delete/:id", BromaController.borrarBroma);
}