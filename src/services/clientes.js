const ModelCliente = require('../models/clientes')


// criando a classe service cliente
class ServiceCliente {
    async GetClientes() {
        return ModelCliente.findAll()
    }
    async CreateCliente(id, nome, email, senha) {
        if(!id || !nome || !email || !senha){
            throw new Error("Favor preencher todos os dados!");
            
        }
        return ModelCliente.create({id, nome, email, senha})
    }
    async UpdateCliente(id, nome, email, senha) {
        if(!cliente) {
            throw new Error("Cliente não encontrado")
            
        }
        const cliente = await ModelCliente.findByPk(id)
        if(!cliente) {
            throw new Error("Cliente não encontrado")
        }
        cliente.id = id || cliente.id
        cliente.nome = nome || cliente.nome
        cliente.email = email || cliente.email
        cliente.senha = senha || cliente.senha

        cliente.save()
        return cliente
        
        // return ModelCliente.update({ id, name, email, senha }, {where: { id }})
    }
    async DeleteCliente(id) {
        if(!id) {
            throw new Error("Favor informar o Id")
            
        }
        const cliente = await ModelCliente.findByPk(id)
        if(!cliente) {
            throw new Error("Cliente não encontrado")
            
        }
        return cliente.destroy()
        // return ModelCliente.destroy({ where: { id }})
    }
}

module.exports = new ServiceCliente()