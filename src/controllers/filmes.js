const ServiceFilmes = require('../services/filmes')



// criando a classe croller do filmes
class ControllerFilme {
    // todas as funções do controller, recebem req, res
    async GetFilmes(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const filmes = await ServiceCliente.GetFilmes()
            res.send({ msg: filmes })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    async CreateFilme(req, res) {
        // todas as funções do controller, tem try carh
        try {
  
            const { id, titulo, faixaEtaria, diretor } = req. body

            const filmes = await ServiceFilmes.CreateFilme(id, titulo, faixaEtaria, diretor)
            res.send({ msg: filmes })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    async UpdateFilme(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const id = req.params.id
            const titulo = req.body.titulo
            const faixaEtaria = req.body.faixaEtaria
            const diretor = req.body.diretor
            
            const filmes = await ServiceFilmes.UpdateFilme(id, titulo, faixaEtaria, diretor)
            res.send({ msg: filmes })
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }

    async DeleteFilme(req, res) {
        // todas as funções do controller, tem try carh
        try {
            const id = req.params.id
            await ServiceFilmes.DeleteFilme(id)
            res.status(204). send()
            
        } catch (error) {
            // todo cach vai ser assim
            res.status(500).send({ msg: error.message })
            
        }


    }
}
module.exports = new ControllerFilme()