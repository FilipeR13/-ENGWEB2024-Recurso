var express = require('express');
var router = express.Router();
var Livros = require('../controllers/livros')

/*
GET /books: 
GET /books/:id
GET /books?charater=EEEE
GET /books?genre=AAA
GET /books/genres
GET /books/characters
POST /books
DELETE /books/:id
PUT /books/:id
*/

router.get('/books', function(req, res) {
    if (req.query.character) {
        Livros.listarPorNomedePersonagem(req.query.character)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else if (req.query.genre) {
        Livros.listarPorGenero(req.query.genre)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else {
        Livros.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } 
});

router.get('/books/:id', function(req, res) {
    Livros.getLivro(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/books/genres', function(req, res) {
    Livros.listarGeneros()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/books/characters', function(req, res) {
    Livros.listarPersonagens()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.post('/books', function(req, res) {
    Livros.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.delete('/books/:id', function(req, res) {
    Livros.remover(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.put('/books/:id', function(req, res) {
    Livros.atualizar(req.params.id, req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
