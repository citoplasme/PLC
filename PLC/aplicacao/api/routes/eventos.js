var express = require('express');
var router = express.Router();
var Eventos = require('../controllers/eventos')
var passport = require('passport')

/* GET users listing. */
router.get('/', function(req, res) {
  if(req.query.tipo){
    Eventos.listar_tipo(req.query.tipo)
      .then(dados => res.jsonp(dados))
      .catch(e => res.status(500).jsonp(e)) 
  }
  else {
    Eventos.listar()
      .then(dados => res.jsonp(dados))
      .catch(e => res.status(500).jsonp(e)) 
  }
});

router.get('/:id', function(req, res) {
  Eventos.consultar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.post('/', passport.authenticate('jwt',{session:false}) ,function(req,res){
  Eventos.inserir(req.body)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
})

module.exports = router;