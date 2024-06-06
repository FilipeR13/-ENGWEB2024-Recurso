var express = require('express');
var router = express.Router();
var Livros = require('../controllers/livros')

router.get('/books', function(req, res) {
    if (req.query.charater) {
        Livros.listarPorNomedePersonagem(req.query.charater)
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
        
router.get('/books/:id', function(req, res) {
    Livros.getLivro(req.params.id)
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
