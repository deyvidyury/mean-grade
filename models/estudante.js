const mongoose = require('mongoose');
const config = require('../config/database');

// Schema Estudante
const EstudanteSchema = mongoose.Schema({
    name: {
        type: String
    }
});

const Estudantes = module.exports = mongoose.model('Estudante',EstudanteSchema);

module.exports.getAllEstudantes = function(callback){
    Estudantes.find(callback);
}

module.exports.getEstudanteById = function(id,callback){
    Estudantes.findById(id,callback);
}

module.exports.getEstudanteByName = function(name,callback){
    const query = {name: name};
    Estudantes.find(query,callback);
}

module.exports.addEstudante = function(novoEstudante,callback){
    novoEstudante.save(callback);
}

module.exports.updateEstudante = function(novoEstudante,callback){
    const query = {_id: novoEstudante._id}
    Estudantes.findOneAndUpdate(query,{name: novoEstudante.name},callback);
}

module.exports.removeEstudante = function(id,callback){
    Estudantes.remove({_id: id},callback);
}
