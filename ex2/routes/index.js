var express = require('express');
var router = express.Router();
var axios = require('axios');

const api_url = 'http://localhost:17000';
/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(api_url + '/books')
    .then(response => {
      res.render('index', { lista: response.data, title: 'Lista de Livros' });
    })
    .catch(error => {
      res.render('error', { error: error });
    });
});

router.get('/:id', function(req, res, next) {
  axios.get(api_url + '/books/' + req.params.id)
    .then(response => {
      res.render('livro', { Livro: response.data });
    })
    .catch(error => {
      res.render('error', { error: error });
    });
});

router.get('/authors/:id', function (req, res) {
  axios.get(api_url + "/books").then((response) => {
    let author = req.params.id;
    let livros = response.data;
    let livrosAutor = livros.filter(livro => livro.author && livro.author.includes(author));
    res.render('autor', { autor: author, lista: livrosAutor});
  }).catch((error) => {
    res.render('error', { error: error });
  });
});
module.exports = router;