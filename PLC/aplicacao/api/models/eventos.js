const mongoose = require('mongoose')

var eventoSchema = new mongoose.Schema({
    data: {type: String, required: true},
    tipo: {type: String, required: true},
    local: {type: String, required: true},
    hinicio: {type: String},
    hfim: {type: String}, 
    designacao: {type: String, required: true},
    informacoes: {type: String}
})

module.exports = mongoose.model('evento', eventoSchema)