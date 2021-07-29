var express = require('express');
var router = express.Router();

var contadorVista= (req, res, next)=>{
    if(req.session.vistas == undefined){
        req.session.vistas = 0;
    }
    req.session.vistas ++;
    next();
}

//este es un middleware 
//los middleware se ejecutan antes que el router y sirve par verificar 
router.use(contadorVista);

/* GET users listing. */
router.get('/', (req, res, next) => {
    console.log(req.session)
    res.send('herePOST are the animals and they were seen: ' + req.session.vistas + " times");
  });

  router.post('/', (req, res, next)=>{
      if (!req.session.animales){
          req.session.animales= [];
      }

      if (req.get('content-type')=="aplication/json")

      console.log(req.body);
      req.session.animales.push(req.body);
      res.send('Peticion recibida');
  });

module.exports = router;
