const express = require('express')
const routerCliente = require('./src/routers/clientes')
const routerFilmes = require('./src/routers/filmes')
const database = require('./src/config/database')


const app = express()

// Middlewere json 
app.use(express.json())

// adicionar as rotas ao express
app.use('/cliente',routerCliente)
app.use('/filmes',routerFilmes)

database.db
    .sync({ force: false })
    .then(( ) => {
        console.info("Banco conectado com sucesso")
        // inicilizar o servidor
        app.listen(3000, () => "Servidor rodando na porta 3000")
    })
    .catch((e) => {
        console.error('Não foi possivel conectar com o banco de dados: ${e}')
    })