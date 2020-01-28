const mongoose = require('mongoose')

var utilizadorSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    password: { type: String, required: true },
    universidade : String,
    curso : String, 
    ano : String,
    img_path: String
  });

module.exports = mongoose.model('utilizadores', utilizadorSchema)