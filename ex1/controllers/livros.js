var { model } = require('mongoose');

var Livros = require('../models/livros');

module.exports.listar = () => {
    return Livros
        .find()
        .exec();
}

module.exports.getLivro = (id) => {
    return Livros
        .findOne({_id: id})
        .exec();
}

module.exports.listarPorNomedePersonagem = (personagem) => {
    return Livros
        .find({characters: personagem})
        .exec();
}
// lista dos livros associados ao género (genre) AAA

module.exports.listarPorGenero = (genero) => {
    return Livros
        .find({genres: genero})
        .exec();
}

// Listar generos ordenados alfabeticamente
module.exports.listarGeneros = () => {
    return Livros
        .distinct("genres")
        .sort()
        .exec();
}

// Listar characters

module.exports.listarPersonagens = () => {
    return Livros
        .distinct("characters")
        .sort()
        .exec();
}

module.exports.inserir = (livro) => {
    if (Livros.findOne({ _id: livro._id }).length == 1) {
        return Promise.reject(new Error("Id already exists"))
    }

    var novo = new Livros(livro)
    return novo.save()
}

module.exports.remover = (id) => {
    return Livros.deleteOne({ _id: id })
}

module.exports.atualizar = (id, livro) => {
    return Livros.updateOne({ _id: id}, livro)
}