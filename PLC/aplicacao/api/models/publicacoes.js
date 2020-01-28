const mongoose = require('mongoose')

var comentarioSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    data: { type: String, required: true },
    user_id: String
  });

var publicacaoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo : {type: String, required: true}, 
    descricao: { type: String, required: true },
    data: { type: String, required: true },
    tags: [String], 
    user_id: String,
    image_path : String,
    comentarios: [comentarioSchema]
  });

module.exports = mongoose.model('publicacoes', publicacaoSchema)
