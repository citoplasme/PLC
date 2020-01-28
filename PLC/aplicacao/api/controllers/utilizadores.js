var Utilizador = require('../models/utilizadores')

module.exports.listar = () => {
    return Utilizador
        .find()
        .exec()
}

module.exports.consultar = email => {
    return Utilizador
        .findOne({email: email})
        .exec()
}

module.exports.atualizar = u => {
    return Utilizador
        .findOneAndUpdate({ _id: u._id }, { $set: {nome : u.nome, universidade : u.universidade, curso : u.curso, ano: u.ano, img_path : u.img_path}})    
        .exec()
}

module.exports.inserir = u => {
    var novo = new Utilizador(u)
    return novo.save()
}