# Preparacao do dataset

Primeiro foi preparado o dataset com o script.py.

Este script converte as strings para lista de dados das seguintes chaves:
    Lista de gêneros
    Lista de personagens
    Lista de prêmios
    Lista de avaliações por estrelas
    Lista de cenários

Para além disso ainda transforma o "bookId" em "_id".

O resultado é guardado em "dataset-novo.json".

# Escolha do Id do livro

Como dito em cima, o "bookId" é transformado em "_id" e é escolhido o "_id" do livros para a query.

# Rodar o teste.

É possível correr o comando:

```bash
docker compose up --build
```

Para colocar APENAS o mongo db num docker.

## Correr o ex1

Para correr o ex1

```bash
npm install
npm start
``` 

## Correr o ex2

Para correr o ex2

```bash
npm install
npm start
```