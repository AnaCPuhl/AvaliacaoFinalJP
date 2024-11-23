const express = require('express')
const ControllerFilmes = require('../controllers/filmes')

// inicializando as rotas do express
const router = express.Router()


// criando as rotas
router.get('/', ControllerFilmes.GetFilmes)
router.post('/', ControllerFilmes.CreateFilme)
router.put('/:id', ControllerFilmes.UpdateFilme)
router.delete('/:id', ControllerFilmes.DeleteFilme)

// exportar as rotas
module.exports = router