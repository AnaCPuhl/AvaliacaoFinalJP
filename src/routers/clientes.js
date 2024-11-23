const express = require('express')
const ControllerCliente = require('../controllers/clientes')

// inicializando as rotas do express
const router = express.Router()


// criando as rotas
router.get('/', ControllerCliente.GetClientes)
router.post('/', ControllerCliente.CreateCliente)
router.put('/:id', ControllerCliente.UpdateCliente)
router.delete('/:id', ControllerCliente.DeleteCliente)

// exportar as rotas
module.exports = router