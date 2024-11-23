const ServiceCliente = require('../services/clientes')



// criando a classe croller do cliente
class ControllerCliente {
    // todas as funções do controller, recebem req, res
    async GetClientes(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const clientes = await ServiceCliente.GetClientes()
            res.send({ msg: clientes })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    async CreateCliente(req, res) {
        // todas as funções do controller, tem try carh
        try {
  
            const { id, name, email, senha } = req. body

            const cliente = await ServiceCliente.CreateCliente(id, name, email, senha)
            res.send({ msg: cliente })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    async UpdateCliente(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const id = req.params.id
            const name = req.body.name
            const email = req.body.email
            const senha = req.body.senha
            
            const cliente = await ServiceCliente.UpdateCliente(id, name, email, senha)
            res.send({ msg: cliente })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    async DeleteCliente(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const id = req.params.id
            await ServiceCliente.DeleteCliente(id)
            res.status(204). send()
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }
}
module.exports = new ControllerCliente()