var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// el :usario es la variable que resive del navegador 
router.get('/:usuario', function(req, res, next) {
  // req => es la peticion del usario desde el navegador 
  // res => es la respuesta que se le da al usario
  // next => es el callback 

  var usuario = req.params.usuario;
   
  res.send("Usuario  " + usuario);

})

module.exports = router;
