import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './idealcanyon.sqlite',
    typeValidation: true,
    logging: false
})

export default sequelize;