const mongoose = require('mongoose')

var ficheiroSchema = new mongoose.Schema({
    data: String,
    uc: String, 
    tipo : String,
    name: String,
    path: String,
    mimetype: String,
    size: Number
})

module.exports = mongoose.model('ficheiros', ficheiroSchema)