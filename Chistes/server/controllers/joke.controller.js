//(realiza consultas(hacer cosas atra vez de métodos como actualizar, crear, etc...))
// Hago referencia al modelo
const Broma = require("../models/joke.model");

//Regresa lista de objetos/ documentos de Chiste
module.exports.muestraBromas = (req, res) =>{
    //Broma importada del modelo usa la base de datos de jokes
    //db.jokes.find()
    Broma.find()
    .then(todasBromas => res.json({jokes: todasBromas}))
    .catch(err => res.json({message: "Algo salió mal", error: err}))
};

//Me regresa un documento de chiste en base al ID que recibe de la URL
module.exports.muestraBroma = (req, res) =>{
    //Broma importada del modelo usa la base de datos de jokes
    //db.jokes.find(_id: ObjectId('4532'))
    Broma.findOne({_id: req.params.id})
    .then(unaBroma => res.json({broma: unaBroma}))
    .catch(err => res.json({message: "Algo salió mal", error: err}))
};

//Me crea un nuevo estudiante en base a lo que reciba en body
module.exports.creaBroma = (req, res) =>{
    //db.jokes.insertOne({nombre: ""...})
    Broma.create(req.body)
    .then(nuevaBroma => res.json({broma: nuevaBroma}))
    .catch(err => res.json({message: "Algo salió mal", error: err}))
};

//Me actualiza el chiste en base a lo que recibe en body y lo hace sólamente con el ID recibido en URL
module.exports.actualizaBroma = (req, res) =>{
    Broma.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(bromaActualizada => res.json({broma: bromaActualizada}))
    .catch(err => res.json({message: "Algo salió mal", error: err}));
};

//Borrar una broma en base al ID url
module.exports.borrarBroma = (req, res) => {
    Broma.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: "Algo salió mal", error: err}));
}


