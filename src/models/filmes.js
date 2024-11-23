const database = require('../config/database')


class ModelFilmes {
    constructor() {
        this.model = database.db.define('filmes', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.db.Sequelize.STRING
            },
            faixaEtaria: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            diretor: {
                type: database.db.Sequelize.STRING,
                unique: true
            }    
        })
    }
}
    

module.exports = new ModelFilmes().model