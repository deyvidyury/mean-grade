const mongoose = require('mongoose');
const config = require('../config/database');

// Schema Nota
const NotaSchema = mongoose.Schema({
    std_id: {
        type: String
    },
    value: {
        type: Number,
        default: 0
    },
    mes: {
        type: Number
    }
});

const Nota = module.exports = mongoose.model('Nota',NotaSchema);

module.exports.getNotasPorEstudante = function(std_id,callback){
    const query = {std_id: std_id}
    Nota.find(query,callback);
}

module.exports.getNotasPorMes = function(std_id,mes,callback){
    const query = {std_id: std_id, mes: mes};
    Nota.find(query,callback);
}

module.exports.addNotaPorMes = function(novaNota,callback){
    novaNota.save(callback);
}

module.exports.updateNota = function(uptNota,callback){
    const query = {_id: uptNota._id}
    Nota.findOneAndUpdate(query,{value: uptNota.value},callback);
}

module.exports.removeNotas = function(std_id,callback){
    const query = {std_id: std_id};
    Nota.remove(query,callback);
}
// module.exports.addNota = function()
