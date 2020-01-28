const express = require('express');
const router = express.Router();
const fs = require('fs')
var Ficheiros = require('../controllers/ficheiros')
var Ficheiro = require('../models/ficheiros')
var ncp = require('ncp').ncp;
ncp.limit = 16;

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var path = require('path')
var passport = require('passport')

/* GET da lista de ficheiros */
router.get('/', passport.authenticate('jwt',{session:false}) ,function(req, res) {
    if(req.query.uc && req.query.tipo){
        Ficheiros.listar_uc_tipo(req.query.uc, req.query.tipo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else if(req.query.uc){
        Ficheiros.listar_uc(req.query.uc)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else {
        Ficheiros.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
})

router.get('/:id', passport.authenticate('jwt',{session:false}) ,function(req, res) {
    Ficheiros.findOne(req.params.id)
      .then(dados => res.sendFile(path.resolve(dados.path)))
      .catch(erro => res.status(500).jsonp(erro))
})

// router.post('/ficheiros', upload.single('ficheiro'), function(req,res){
router.post('/', passport.authenticate('jwt',{session:false}) ,upload.array('ficheiro'), function(req,res){
    if(req.body.uc){
        if(Array.isArray(req.body.uc)){
          ucs = req.body.uc
        }
        else {
          ucs = []
          ucs.push(req.body.uc)
        }
      }else {
        ucs = []
      }
    
      if(req.body.tipo){
        if(Array.isArray(req.body.tipo)){
          tipos = req.body.tipo
        }
        else {
          tipos = []
          tipos.push(req.body.tipo)
        }
      }else {
        tipos = []
      }

    for(var i = 0; i < req.files.length; i++){
        var oldPath = __dirname + '/../' + req.files[i].path
        var newPath = __dirname + '/../data/' + req.files[i].originalname
        
        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err
        })

        var data = new Date()

        var novoFicheiro = new Ficheiro(
            { 
                data: data.toISOString(),
                uc: ucs[i],
                tipo: tipos[i],
                name: req.files[i].originalname,
                path: newPath, 
                mimetype: req.files[i].mimetype, 
                size: req.files[i].size
            });
        
        novoFicheiro.save(function (err, ficheiro) {
            if (err) console.log('Error: ' + err)
            else
                console.log(ficheiro.name + ' was saved successfully')
        })
    }
    res.end('DONE')
})

module.exports = router;