const ServiceFilmes_locados = require('../services/filmes_locados')


class ControllerFilmes_locados {

    async CreateFilmes_locados(req, res) {
        
        try {
  
            const { id, idFilmes, idClientes, datalocacao, datadevolucao } = req. body

            const filmes_locados = await ServiceFilmes_locados.CreateFilmes_locados(id, idFilmes, idClientes, datalocacao, datadevolucao)
            res.send({ msg: filmes_locados })
            
        } catch (error) {
            
            res.status(500).send({ msg: error.message })
            
        }


    }

    async UpdateFilmes_locados(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const id = req.params.id
            const idFilmes = req.body.idFilmes
            const idClientes = req.body.idClientes
            const datalocacao = req.body.datalocacao
            const datadevolucao = req.body.datadevolucao
            
            const filmes_locados = await ServiceFilmes_locados.UpdateFilmes_locados(id, idFilmes, idClientes, datalocacao, datadevolucao)
            res.send({ msg: filmes_locados })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    
}
module.exports = new ControllerFilmes_locados()