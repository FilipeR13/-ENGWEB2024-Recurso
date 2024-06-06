var express = require('express');
var router = express.Router();
var axios = require('axios');
const url = 'https://localhost:17000/';

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(url + 'contratos')
    .then(dados => {
      res.render('index', { lista: dados.data , title : 'Lista de Contratos'});
    })
    .catch(erro => {
      res.render('error', { error: erro })
    });
});

module.exports = router;