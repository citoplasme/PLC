var Ficheiro = require('../models/ficheiros')
module.exports.listar = () => {
    return Ficheiro
        .find()
        .exec()
}

module.exports.listar_uc = (u) => {
    return Ficheiro
        .find({uc : u})
        .exec()
}

module.exports.listar_uc_tipo = (u, t) => {
    return Ficheiro
        .find({uc : u, tipo : t})
        .exec()
}

module.exports.findOne = (id) => {
    return Ficheiro
        .findOne({_id : id})
        .exec()
}