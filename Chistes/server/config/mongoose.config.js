const mongoose = require("mongoose");
// chistes_tarea es la base de datos
mongoose.connect("mongodb://localhost/chistes_tarea", {
    useNewUrlParser:true,
    useUnifiedTopology: true//si hay algún error al inicio no lo muestra
}).then(() => console.log("Conexión a Mongo lista"))
.catch(err => console.log("Error en conexión", err));
