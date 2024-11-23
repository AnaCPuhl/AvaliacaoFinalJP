const ModelFilme = require('../models/filmes')

// criando a classe service filmes
class ServiceFilmes {
    async GetFilmes() {
        return ModelFilme.findAll()
    }
    async CreateFilme(id, titulo, faixaEtaria, diretor) {
        if(!id || !titulo || !faixaEtaria || !diretor){
            throw new Error("Favor preencher todos os dados!");
            
        }
        return ModelFilme.create({id, titulo, faixaEtaria, diretor})
    }
    async UpdateFilme(id, titulo, faixaEtaria, diretor) {
        if(!filmes) {
            throw new Error("Filme não encontrado")
            
        }
        const filmes = await ModelFilme.findByPk(id)
        if(!filmes) {
            throw new Error("Filme não encontrado")
        }
        filmes.id = id || filmes.id
        filmes.titulo = titulo || filmes.titulo
        filmes.faixaEtaria = faixaEtaria || filmes.faixaEtaria
        filmes.senha = diretor || filmes.diretor

        filmes.save()
        return filmes
        
        // return ModelFimes.update({ id, titulo, faixaEtaria, diretor }, {where: { id }})
    }
    async DeleteFilme(id) {
        if(!id) {
            throw new Error("Favor informar o Id")
            
        }
        const filmes = await ModelFilme.findByPk(id)
        if(!filmes) {
            throw new Error("Filme não encontrado")
            
        }
        return filmes.destroy()
        // return ModelFilmes.destroy({ where: { id }})
    }
}

module.exports = new ServiceFilmes()