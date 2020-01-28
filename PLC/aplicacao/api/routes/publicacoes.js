var express = require('express');
var router = express.Router();
var Publicacoes = require('../controllers/publicacoes')
var passport = require('passport')

router.get('/', passport.authenticate('jwt',{session:false}) ,function(req, res) {
    if(req.query.tag){
        Publicacoes.listar_tag(req.query.tag)
            .then(dados => res.jsonp(dados))
            .catch(e => res.status(500).jsonp(e))
    } else{
        Publicacoes.listar()
            .then(dados => res.jsonp(dados))
            .catch(e => res.status(500).jsonp(e))
    }
});

router.get('/:id', passport.authenticate('jwt',{session:false}) ,function(req, res) {
    Publicacoes.consultar(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(e => res.status(500).jsonp(e))
});

router.post('/publicacoes/:id' , passport.authenticate('jwt',{session:false}) , function (req,res) {
    Publicacoes.adicionar_comentario(req.params.id, req.body)
        .then(dados => res.jsonp(dados))
        .catch(e => res.status(500).jsonp(e))
});

router.post('/', passport.authenticate('jwt',{session:false}) ,function(req,res){
    Publicacoes.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(e => res.status(500).jsonp(e))
})

router.delete('/:id', passport.authenticate('jwt',{session:false}) ,function(req, res) {
    Publicacoes.apagar(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(e => res.status(500).jsonp(e))
});

module.exports = router;
