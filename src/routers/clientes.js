const express = require('express')
const ControllerCliente = require('../controllers/clientes')
const auth = require("../middleware/auth")

// inicializando as rotas do express
const router = express.Router()

// criando as rotas
// router.get('/', ControllerCliente.GetClientes)
router.post('/', ControllerCliente.CreateCliente)
router.post('/login', ControllerCliente.Login)
router.get('/', auth, ControllerCliente.GetClientes)
router.put('/:id', auth, ControllerCliente.UpdateCliente)
router.delete('/:id', auth, ControllerCliente.DeleteCliente)


// router.put('/:id', ControllerCliente.UpdateCliente)
// router.delete('/:id', ControllerCliente.DeleteCliente)

// exportar as rotas
module.exports = router