import { Model, InferAttributes, InferCreationAttributes, DataTypes, UUIDV4 } from "sequelize";

import sequelize from "../database/db";

class Contact extends Model<InferAttributes<Contact>, InferCreationAttributes<Contact>> {
    declare contact_id: string;
    declare contact_name: string;
    declare contact_subject: string;
    declare contact_message: string;
    declare contact_agrees_with_terms: string;
}

Contact.init({
    contact_id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty: {
                msg: "O id do contato não pode ser vazio.",
            },
            notNull: {
                msg: "O id do contato não pode ser nulo.",
            },
            isUUID: {
                args: 4,
                msg: "O id do contato deve ser um UUID válido.",
            },
        },
    },
    contact_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O nome de contato não pode ser vazio.",
            },
            notNull: {
                msg: "O nome de contato não pode ser nulo.",
            },
            len: {
                args: [3, 255],
                msg: "O nome de contato deve ter entre 3 e 255 caracteres.",
            },
            is: {
                args: /^[a-zA-ZÀ-ÿ\s]*$/,
                msg: "O nome de contato deve conter apenas letras e espaços.",
            },
        },
    },
    contact_subject: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O assunto não pode ser vazio.",
            },
            notNull: {
                msg: "O assunto não pode ser nulo.",
            },
            len: {
                args: [3, 255],
                msg: "O assunto deve ter entre 3 e 255 caracteres.",
            },
        },
    },
    contact_message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "A mensagem não pode ser vazia.",
            },
            notNull: {
                msg: "A mensagem não pode ser nula.",
            },
            len: {
                args: [3, 1000],
                msg: "A mensagem deve ter entre 3 e 1000 caracteres.",
            },
        },
    },
    contact_agrees_with_terms: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O assunto não pode ser vazio.",
            },
            notNull: {
                msg: "O assunto não pode ser nulo.",
            },
            isIn: {
                args: [["on"]],
                msg: 'Você deve confirmar que concorda com os termos de uso.',
            },
        },
    },
}, { sequelize });

(async () => {
    await sequelize.sync();
})();

export default Contact;