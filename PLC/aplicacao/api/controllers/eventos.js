var Evento = require('../models/eventos')

module.exports.listar = () => {
    return Evento
        .find()
        .exec()
}

module.exports.listar_tipo = (t) => {
    return Evento
        .find({tipo : t})
        .exec()
}

module.exports.consultar = id => {
    return Evento
        .findOne({_id: id})
        .exec()
}

module.exports.inserir = u => {
    console.log(u)
    var novo = new Evento(u)
    return novo.save()
}
