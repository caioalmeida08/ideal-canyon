const { DataTypes } = require("sequelize");
const sequelize = require("../database/db.js").sequelize;

const Contato = sequelize.define('contato', {

    contact_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    contact_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /^[a-zA-Z\s]*$/,
                msg: 'Por favor, insira um nome válido. Apenas letras e espaços são permitidos.'
            },
            len: {
                args: [3, 64],
                msg: 'Por favor, insira um nome válido. De 3 a 64 caracteres.'
            },
        }
    },
    contact_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                args: true,
                msg: 'Por favor, insira um endereço de email válido. Ex: email@plataforma.com'
            },
        }
    },
    contact_subject: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [8, 64],
                msg: 'Por favor, insira um assunto válido. De 8 a 64 caracteres. Ex: Dúvida sobre o método de envio.'
            },
        }
    },
    contact_message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [64, 512],
                msg: 'Por favor, insira uma mensagem válida. De 64 a 512 caracteres.'
            },
        }
    },
    contact_agrees_with_terms: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [['on']],
                msg: 'Por favor, aceite os termos de uso e política de privacidade.'
            },
            notNull: {
                args: true,
                msg: 'Por favor, aceite os termos de uso e política de privacidade.'
            },
        }
    },

}, { sequelize });

module.exports = Contato;