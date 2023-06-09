import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/idealcanyon.sqlite',
    typeValidation: true,
    logging: false
});

(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({
            // force: true
        });
        console.log("Conexão com o banco de dados estabelecida com sucesso.");
    } catch (error) {
        console.error("Não foi possível conectar ao banco de dados:", error);
    }
})();

export default sequelize;