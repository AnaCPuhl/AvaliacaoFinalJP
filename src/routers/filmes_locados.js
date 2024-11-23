const express = require('express')
const ControllerFilmes_locados = require('../controllers/filmes_locados')

// inicializando as rotas do express
const router = express.Router()


// criando as rotas
router.post('/', ControllerFilmes_locados.CreateFilmes_locados)
router.put('/:id', ControllerFilmes_locados.UpdateFilmes_locados)

// exportar as rotas
module.exports = router