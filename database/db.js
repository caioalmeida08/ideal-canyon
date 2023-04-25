const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/idealcanyon.sqlite',
    define: {
        freezeTableName: true
    }
});

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Conexão bem sucedida com o banco de dados.');
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
    }
}

connect()

module.exports = { sequelize };