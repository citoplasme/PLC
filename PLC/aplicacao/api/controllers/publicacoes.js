var Publicacao = require('../models/publicacoes')
var mongoose = require('mongoose')

module.exports.listar = () => {
    return Publicacao
        .find()
        .sort({data : -1})
        .exec()
}

module.exports.listar_tag = (t) => {
    return Publicacao
        .find({tags : t})
        .sort({data : -1})
        .exec()
}

module.exports.consultar = id => {
    return Publicacao
        .findOne({_id: id})
        //.sort({'comentarios.data' : -1})
        .exec()
}

module.exports.adicionar_comentario = (id, comentario) => {
    comentario.data = new Date().toISOString();
    return Publicacao
        .findOneAndUpdate({ _id: id }, { $push: {comentarios : comentario}})
        .exec()
}

module.exports.inserir = u => {
    u._id = mongoose.Types.ObjectId()
    u.data = new Date().toISOString();
    u.comentarios = [];
    
    var filtered = u.tags.filter(function (el) {
        return el != '';
    });
    u.tags = filtered;
    console.log(u)

    var novo = new Publicacao(u)
    return novo.save()
}

module.exports.apagar = id => {
    return Publicacao
        .deleteOne({_id:id})
        .exec()
}