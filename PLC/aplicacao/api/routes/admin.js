var express = require('express');
var router = express.Router();
var Eventos = require('../controllers/eventos')
var Publicacoes = require('../controllers/publicacoes')
var Ficheiros = require('../controllers/ficheiros')
var Utilizadores = require('../controllers/utilizadores')
var passport = require('passport')
var fs = require('fs')
var path = require('path')
var mongoose = require('mongoose')

function execute(command) {
    const exec = require('child_process').exec
  
    exec(command, (err, stdout, stderr) => {
      process.stdout.write(stdout)
    })
}
  
router.post('/', passport.authenticate('jwt',{session:false}) ,function(req,res){
  
  req.body.eventos.forEach( item => {
    item._id = {
      $oid : item._id
    }
    });
  
  req.body.publicacoes.forEach( item => {
    item._id = {
      $oid : item._id
    }
  });
  
  req.body.utilizadores.forEach( item => {
    item._id = {
      $oid : item._id
    }
  });
  
  req.body.ficheiros.forEach( item => {
    item._id = {
      $oid : item._id
    }
  });

  fs.writeFileSync(path.resolve(__dirname + "/../import/eventos.json"), JSON.stringify(req.body.eventos, null, 2))
  fs.writeFileSync(path.resolve(__dirname + "/../import/publicacoes.json"), JSON.stringify(req.body.publicacoes, null, 2))
  fs.writeFileSync(path.resolve(__dirname + "/../import/utilizadores.json"), JSON.stringify(req.body.utilizadores, null, 2))
  fs.writeFileSync(path.resolve(__dirname + "/../import/ficheiros.json"), JSON.stringify(req.body.ficheiros, null, 2))
  
  db = 'daw2019-agenda'
  
  execute('mongoimport -d ' + db + ' -c eventos --drop --jsonArray ' + path.resolve(__dirname + "/../import/eventos.json"))
  execute('mongoimport -d ' + db + ' -c publicacoes --drop --jsonArray ' + path.resolve(__dirname + "/../import/publicacoes.json"))
  execute('mongoimport -d ' + db + ' -c utilizadores --drop --jsonArray ' + path.resolve(__dirname + "/../import/utilizadores.json"))
  execute('mongoimport -d ' + db + ' -c ficheiros --drop --jsonArray ' + path.resolve(__dirname + "/../import/ficheiros.json"))
  
  /*const directory = path.resolve(__dirname + '/../import/');

    fs.readdir(directory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }
    });*/
  res.end('DONE')
})

module.exports = router;