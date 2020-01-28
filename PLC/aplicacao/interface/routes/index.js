var express = require('express');
var router = express.Router();
var axios = require('axios')
var passport = require('passport')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

const fs = require('fs')
var ncp = require('ncp').ncp;
ncp.limit = 16;
var path = require('path')

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var request = require('request');

const antlr4 = require('antlr4/index');
const userParser = require('../grammars/userParser.js');
const userLexer = require('../grammars/userLexer.js');

const downloadsFolder = require('downloads-folder');

router.get('/', verificaAutenticacao, function(req, res) {
  //res.render('index')  
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  axios.get('http://localhost:5003/utilizadores/' + req.session.passport.user + "?token=" + token)
    .then(function (dados) {
      if(dados.data.admin === '1'){
        res.render('admin')
      }
      else {
        res.render('index')
      }
    })
    .catch(e => res.render('error', {error: e}))
});

// ---------------------------- ADMIN -----------------------------

router.get('/admin/exportar', verificaAutenticacao, function(req, res) {
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  axios.all([
    axios.get('http://localhost:5003/publicacoes' + '?token=' + token),
    axios.get('http://localhost:5003/eventos' + '?token=' + token),
    axios.get('http://localhost:5003/ficheiros' + '?token=' + token),
    axios.get('http://localhost:5003/utilizadores' + '?token=' + token),
  ])
  .then(axios.spread(function (pubs, eventos, ficheiros, users) {
    obj = {
      publicacoes: pubs.data, 
      eventos : eventos.data, 
      ficheiros : ficheiros.data, 
      utilizadores : users.data
    }
    fs.writeFile(path.resolve(downloadsFolder() + "/export.json"), JSON.stringify(obj, null, 2), function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  }); 
    res.redirect('/')
  }));
});

router.get('/admin/importar', verificaAutenticacao, function(req, res) {
  res.render('importar')
});

router.post('/admin/importar', verificaAutenticacao, upload.single('ficheiro'), function(req, res) {
  var oldPath = __dirname + '/../' + req.file.path
  var newPath = __dirname + '/../data/' + req.file.originalname
    
  fs.renameSync(oldPath, newPath)
    
  var input = fs.readFileSync(newPath).toString();
  var obj = JSON.parse(input)
  
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  axios.post('http://localhost:5003/admin' + "?token=" + token, obj)
    .then(dados => res.redirect('/'))
    .catch(e => res.render('error', {error: e}))
});

// ---------------------------- EVENTOS -----------------------------
router.get('/eventos/:id', verificaAutenticacao, function(req,res){
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  axios.get('http://localhost:5003/eventos/' + req.params.id + "?token=" + token)
      .then(dados => res.render('eventos', {evento: dados.data}))
      .catch(e => res.render('error', {error: e}))
})

router.get('/eventos', verificaAutenticacao, function(req,res){
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  if(req.query.tipo){
    axios.get('http://localhost:5003/eventos?tipo=' + req.query.tipo + "&token=" + token)
        .then(dados => res.render('eventos', {eventos: dados.data}))
        .catch(e => res.render('error', {error: e}))
  } else{
    axios.get('http://localhost:5003/eventos/' + "?token=" + token)
        .then(dados => res.render('eventos', {eventos: dados.data}))
        .catch(e => res.render('error', {error: e}))
  }
})

router.post('/eventos', verificaAutenticacao, function(req,res){
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  axios.post('http://localhost:5003/eventos' + "?token=" + token, req.body)
    .then(dados => res.redirect('/eventos'))
    .catch(e => res.render('error', {error: e}))
})

// ---------------------------- EVENTOS PUBLICOS -----------------------

router.get('/publico', function(req,res){
  if(req.query.tipo){
    axios.get('http://localhost:5003/eventos?tipo=' + req.query.tipo)
        .then(dados => res.render('eventos_publicos', {eventos: dados.data}))
        .catch(e => res.render('error', {error: e}))
  } else{
    axios.get('http://localhost:5003/eventos/')
        .then(dados => res.render('eventos_publicos', {eventos: dados.data}))
        .catch(e => res.render('error', {error: e}))
  }
})

// ---------------------------- PUBLICAÇÕES -----------------------------

router.get('/publicacoes', verificaAutenticacao, function(req, res) {
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  if(req.query.tag){
    axios.get('http://localhost:5003?tag=' + req.query.tag + "&token=" + token)
      .then(dados => res.render('publicacoes', {lista: dados.data, utilizador : req.session.passport.user}))
      .catch(e => res.render('error', {error: e}))
  } else {
    axios.get('http://localhost:5003' + "?token=" + token)
      .then(dados => res.render('publicacoes', {lista: dados.data, utilizador : req.session.passport.user}))
      .catch(e => res.render('error', {error: e}))
  }
});

router.get('/publicacoes/:id', verificaAutenticacao, function(req,res){
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  axios.get('http://localhost:5003/publicacoes/' + req.params.id + "?token=" + token)
      .then(dados => res.render('individual', {item: dados.data}))
      .catch(e => res.render('error', {error: e}))
})

router.post('/publicacoes/:id', verificaAutenticacao, function(req,res){
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  axios.post('http://localhost:5003/publicacoes/' + req.params.id + "?token=" + token, {
    descricao : req.body.descricao,
    user_id : req.session.passport.user
  })
    .then(dados => res.redirect('/publicacoes/' + req.params.id))
    .catch(e => res.render('error', {error: e}))
})

router.post('/publicacoes', verificaAutenticacao, function(req,res){
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  if(req.body.tags){
    if(Array.isArray(req.body.tags)){
      tags = req.body.tags
    }
    else {
      tags = []
      tags.push(req.body.tags)
    }
  }else {
    tags = []
  }
  axios.post('http://localhost:5003/publicacoes' + "?token=" + token, {
    descricao : req.body.descricao,
    titulo : req.body.titulo,
    tags : tags,
    image_path : req.body.image_path,
    user_id : req.session.passport.user
  })
    .then(dados => res.redirect('/publicacoes'))
    .catch(e => res.render('error', {error: e}))
})

router.delete('/publicacoes/:id', verificaAutenticacao, function(req,res){
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  axios.delete('http://localhost:5003/publicacoes/' + req.params.id + "?token=" + token)
    .then(dados => res.redirect(303, '/publicacoes/'))
    .catch(e => res.render('error', {error: e}))
})

// ---------------------------- FICHEIROS -----------------------------
router.get('/ficheiros', verificaAutenticacao, function(req, res, next) {
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  if(req.query.uc && req.query.tipo){
    axios.get('http://localhost:5003/ficheiros?uc=' + req.query.uc + '&tipo=' + req.query.tipo + "&token=" + token)
      .then(dados => res.render('ficheiros', {lista: dados.data}))
      .catch(e => res.render('error', {error: e}))
  } else if (req.query.uc){
    axios.get('http://localhost:5003/ficheiros?uc=' + req.query.uc + "&token=" + token)
      .then(dados => res.render('ficheiros', {lista: dados.data}))
      .catch(e => res.render('error', {error: e}))
  } else {
    axios.get('http://localhost:5003/ficheiros' + "?token=" + token)
      .then(dados => res.render('ficheiros', {lista: dados.data}))
      .catch(e => res.render('error', {error: e}))
  }
});

router.get('/ficheiros/:id', verificaAutenticacao, function(req, res, next) {
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  axios.get('http://localhost:5003/ficheiros/' + req.params.id + "?token=" + token, {responseType: "stream"})
    .then(response => {  
      response.data.pipe(res);  
    })  
    .catch(e => res.render('error', {error: e}))
});

router.post('/ficheiros', verificaAutenticacao, upload.array('ficheiro'), function(req, res, next) {
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
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

  var r = request.post('http://localhost:5003/ficheiros' + "?token=" + token, function optionalCallback(err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
    // -------
    const directory = path.resolve(__dirname + '/../data/');

    fs.readdir(directory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }
    });
    // --------
    res.redirect('/ficheiros')
  })
  var form = r.form();
  
  for(var i = 0; i < req.files.length; i++){ 
    var oldPath = __dirname + '/../' + req.files[i].path
    var newPath = __dirname + '/../data/' + req.files[i].originalname
    
    fs.renameSync(oldPath, newPath)
    
    // script de enviar para a API 
    form.append('uc', ucs[i]);
    form.append('tipo', tipos[i]);
    form.append('ficheiro', fs.createReadStream(newPath));
  }
});


// ---------------------------- USER -----------------------------

router.get('/user', verificaAutenticacao, function(req,res){
  // SEE THIS
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  axios.get('http://localhost:5003/utilizadores/' + req.session.passport.user + "?token=" + token)
      .then(dados => res.render('perfil', {item: dados.data}))
      .catch(e => res.render('error', {error: e}))
})

router.post('/user', verificaAutenticacao, function(req,res){
  // SEE THIS
  var token = jwt.sign(
    {},
    "daw2019",
    {
        expiresIn:3000,
        issuer:"Servidor myAgenda",
    })
  axios.post('http://localhost:5003/utilizadores/edit?token=' + token, req.body)
      .then(dados => res.redirect('/user'))
      .catch(e => res.render('error', {error: e}))
})

// ----------------------------- AUTENTICAÇÃO -----------------------------------

router.get('/logout', verificaAutenticacao, function(req,res){
  req.logout()
  req.session.destroy(() => res.redirect('/menu'))
  //res.redirect('/')
})

router.get('/menu', function(req,res){
  res.render('menu')
})

router.get('/login', function(req,res){
  res.render('login')
})

router.get('/register', function(req,res){
  res.render('registo')
})

router.get('/registerFile', function(req,res){
  res.render('registoFile')
})

router.post('/login', passport.authenticate('local', 
  { successRedirect: '/',
    successFlash: 'Utilizador autenticado com sucesso!',
    failureRedirect: '/login',
    failureFlash: 'Utilizador ou password inválido(s)...'
  })
)

router.post('/regList', upload.single('ficheiro'), function(req,res){
  var oldPath = __dirname + '/../' + req.file.path
  var newPath = __dirname + '/../data/' + req.file.originalname
    
  fs.renameSync(oldPath, newPath)
    
  var input = fs.readFileSync(newPath).toString();
  var userListener = require('../grammars/userListener').userListener;
  var chars = new antlr4.InputStream(input);
  var lexer = new userLexer.userLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new userParser.userParser(tokens);

  var log = []

  var exLogError = console.error
  console.error = function(msg) {
      log.push(msg)
  }

  // -------
  const directory = path.resolve(__dirname + '/../data/');

  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });
  // --------
  
  //parser.buildParseTrees = true;

  //linha que constroi a árvore de parser(permitindo encontrar os erros do ficheiro de input)
  tree = parser.user()
  var listener = new userListener();

  //console.log(log);

  //dar reset no stderror
  console.error = exLogError
  
  //caso haja erros
  if(log.length>0){
      res.render('erros', {erros: log})
  }
  else{
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    
    var hash = bcrypt.hashSync(listener.info.password, 10)

    axios.post('http://localhost:5003/utilizadores', {
      email: listener.info.email,
      nome: listener.info.nome,
      password: hash,
      universidade: listener.info.universidade,
      curso: listener.info.curso,
      ano: listener.info.ano
  })
    .then(dados => res.redirect('/'))
    .catch(e => res.render('error', {error: e}))
  }
})

router.post('/regGA', function(req,res){
  var hash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hash
  axios.post('http://localhost:5003/utilizadores', req.body)
    .then(dados => res.redirect('/'))
    .catch(e => res.render('error', {error: e}))
})

router.post('/reg', function(req,res){
  var hash = bcrypt.hashSync(req.body.password, 10);
  axios.post('http://localhost:5003/utilizadores', {
    email: req.body.email,
    nome: req.body.nome,
    password: hash
  })
    .then(dados => res.redirect('/'))
    .catch(e => res.render('error', {error: e}))
})

function verificaAutenticacao(req,res,next){
  if(req.isAuthenticated()){
  //req.isAuthenticated() will return true if user is logged in
    next();
  } else{
    res.redirect("/menu");}
}

module.exports = router;
