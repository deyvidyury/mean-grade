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
    Nota.find(std_id,callback);
}

module.exports.getNotasPorMes = function(condition,callback){
    // console.log(condition);
    // const query = {std_id, mes};
    Nota.find(condition,callback);
}

module.exports.addNotaPorMes = function(novaNota,callback){
    novaNota.save(callback);
}

module.exports.updateNota = function(uptNota,callback){
    const query = {_id: uptNota._id}
    Nota.findOneAndUpdate(query,{value: uptNota.value},callback);
}

module.exports.removeNotas = function(std_id,callback){
    Nota.remove(std_id,callback);
}
// module.exports.addNota = function()
