const database = require('../config/database')

class ModelFilmes_locados {
    constructor() {
        this.model = database.db.define('filmes_locados', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            idFilme: {
                type: database.db.Sequelize.STRING
            },
            idCliente: {
                type: database.db.Sequelize.STRING,
                
            },
            datalocacao: {
                type: database.db.Sequelize.STRING,
                
            },
            datadevolucao: {
                type: database.db.Sequelize.STRING,
                
            }
                
        })
    }
}
    

module.exports = new ModelFilmes_locados().model