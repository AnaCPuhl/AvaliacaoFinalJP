const ModelFilme_locado = require('../models/filmes_locados')

// criando a classe service filmes
class ServiceFilmes_locado {
    
    async CreateFilme_locado(id, idFilme, idCliente, datalocacao, datadevolucao) {
        if(!id || !idFilme || !idCliente || !datalocacao || !datadevolucao){
            throw new Error("Favor preencher todos os dados!");
            
        }
        return ModelFilme_locado.create({id, idFilme, idCliente, datalocacao, datadevolucao})
    }
    async UpdateFilme_locado(id, idFilme, idCliente, datalocacao, datadevolucao) {
        if(!filmes_locado) {
            throw new Error("Filme não encontrado")
            
        }
        const filmes_locado = await ModelFilme_locado.findByPk(id)
        if(!filmes_locado) {
            throw new Error("Filme não encontrado")
        }
        filmes_locado.id = id || filmes_locado.id
        filmes_locado.idFilme = idFilme || filmes_locado.idFilme
        filmes_locado.idCliente = idCliente || filmes_locado.idCliente
        filmes_locado.datalocacao = datalocacao || filmes_locado.datalocacao
        filmes_locado.datadevolucao = datadevolucao || filmes_locado.datadevolucao

        filmes.save()
        return filmes_locado
        
    }
    
}

module.exports = new ServiceFilmes_locado()