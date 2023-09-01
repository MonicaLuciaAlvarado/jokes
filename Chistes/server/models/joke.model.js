const mongoose = require("mongoose");
//establezco estructura
const EsquemaJoke = new mongoose.Schema({
    setup: {
        type: String,
        //validación
        required: [true, "setup is required"],
        minlenght: [10, "setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        //validación
        required: [true, "spunchline is required"],
        minlenght: [3, "punchline must be at least 3 characters long"]
    }
}, {timestamps:true, versionKey: false});
//timestamps crea campos de createdAt y updatedAt
//versionKey me elimina el atributo _v

//para usar el esquema debo de crearlo como modelo 
// el modelo se colleiona en la colección de jokes
const Broma = mongoose.model("jokes", EsquemaJoke);

//Usar este documento dentro de otro documento
module.exports = Broma;