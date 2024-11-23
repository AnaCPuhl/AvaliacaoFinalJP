const ModelCliente = require('../models/clientes')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SALT = 12

// criando a classe service cliente
class ServiceCliente {
    async GetClientes() {
        return ModelCliente.findAll()
    }
    async CreateCliente(id, nome, email, senha) {
        if(!id || !nome || !email || !senha){
            throw new Error("Favor preencher todos os dados!");

            const hashSenha = await bcrypt.hash(senha, SALT)
        return ModelCliente.create({ id, senha: hashSenha, email })
            
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
            ? await bcrypt.hash(senha, SALT)
            : cliente.senha
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
    async Login(email, senha) {
        if(!email || !senha) {
            throw new Error("Email ou senha inválido!")
        }

        const cliente = await ModelCliente.findOne({ where: { email } })

        if(!cliente) {
            throw new Error("Email ou senha inválido!")
        }

        const senhaValida = bcrypt.compare(senha, cliente.senha)

        if(!senhaValida) {
            throw new Error("Email ou senha inválido!")
        }

        return jwt.sign({ id: cliente.id }, 'segredo', { expiresIn: 60 * 60 })
}
}

module.exports = new ServiceCliente()