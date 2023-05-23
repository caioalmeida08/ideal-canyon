import { Model, InferAttributes, InferCreationAttributes, DataTypes, UUIDV4 } from "sequelize";

import sequelize from "../database/db";

class Address extends Model<InferAttributes<Model>, InferCreationAttributes<Model>>{
    declare address_id: string;
    declare address_street: string;
    declare address_number: number;
    declare address_complement: string;
    declare address_district: string;
    declare address_city: string;
    declare address_state: string;
    declare address_country: string;
    declare address_zip_code: number;
    declare address_owner_id: string;
    declare address_destinatary_name: string;
    declare address_destinatary_date_of_birth: Date;
    declare address_destinatary_cpf: number;
    declare address_destinatary_phone: number;
}

Address.init({
    address_id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
        validate:{
            notEmpty:{
                msg: "O ID do endereço não pode ser vazio."
            },
            notNull:{
                msg: "O ID do endereço não pode ser nulo."
            },
            isUUID:{
                args: 4,
                msg: "O ID do endereço deve ser um UUID válido."
            },
        }
    },
    address_street: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "A rua não pode ser vazia."
            },
            notNull:{
                msg: "A rua não pode ser nula."
            },
            len:{
                args: [3, 255],
                msg: "A rua deve ter entre 3 e 255 caracteres."
            },
            is:{
                args: /^[a-zA-ZÀ-ÿ\s]*$/,
                msg: "A rua deve conter apenas letras e espaços."
            },
        }
    },
    address_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "O número não pode ser vazio."
            },
            notNull:{
                msg: "O número não pode ser nulo."
            },
            min: {
                args: 1,
                msg: "O número deve ser maior que 0."
            },
            max: {
                args: 999999,
                msg: "O número deve ser menor que 999999."
            },
            isInt: {
                msg: "O número deve ser um inteiro."
            }
        }
    },
    address_complement: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            len:{
                args: [3, 255],
                msg: "O complemento deve ter entre 3 e 255 caracteres."
            },
            is:{
                args: /^[a-zA-ZÀ-ÿ\s]*$/,
                msg: "O complemento deve conter apenas letras e espaços."
            },
        }
    },
    address_district: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "O bairro não pode ser vazio."
            },
            notNull:{
                msg: "O bairro não pode ser nulo."
            },
            len:{
                args: [3, 255],
                msg: "O bairro deve ter entre 3 e 255 caracteres."
            },
        }
    },
    address_city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "A cidade não pode ser vazia."
            },
            notNull:{
                msg: "A cidade não pode ser nula."
            },
            len:{
                args: [3, 255],
                msg: "A cidade deve ter entre 3 e 255 caracteres."
            },
        }
    },
    address_state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "O estado não pode ser vazio."
            },
            notNull:{
                msg: "O estado não pode ser nulo."
            },
            len:{
                args: [2, 2],
                msg: "O estado deve ter 2 caracteres."
            },
        }
    },
    address_country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "O país não pode ser vazio."
            },
            notNull:{
                msg: "O país não pode ser nulo."
            },
            len:{
                args: [3, 255],
                msg: "O país deve ter entre 3 e 255 caracteres."
            },
        }
    },
    address_zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "O CEP não pode ser vazio."
            },
            notNull:{
                msg: "O CEP não pode ser nulo."
            },
            len:{
                args: [8, 8],
                msg: "O CEP deve ter 8 caracteres."
            },
            isInt:{
                msg: "O CEP deve conter apenas números."
            }
        }
    },
    address_owner_id: {
        type: DataTypes.UUID,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "O ID do dono do endereço não pode ser vazio."
            },
            notNull:{
                msg: "O ID do dono do endereço não pode ser nulo."
            },
            isUUID:{
                args: 4,
                msg: "O ID do dono do endereço deve ser um UUID válido."
            },
        }
    },
    address_destinatary_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "O nome do destinatário não pode ser vazio."
            },
            notNull:{
                msg: "O nome do destinatário não pode ser nulo."
            },
            len:{
                args: [3, 255],
                msg: "O nome do destinatário deve ter entre 3 e 255 caracteres."
            },
            is:{
                args: /^[a-zA-ZÀ-ÿ\s]*$/,
                msg: "O nome do destinatário deve conter apenas letras e espaços."
            },
        }
    },
    address_destinatary_date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "A data de nascimento do destinatário não pode ser vazia."
            },
            notNull:{
                msg: "A data de nascimento do destinatário não pode ser nula."
            },
            isDate:{
                msg: "A data de nascimento do destinatário deve ser uma data válida."
            },
            isBefore:{
                // 18 years before today
                args: new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0],
                msg: "O destinatário deve ter mais de 18 anos."
            },
            isAfter:{
                args: "1900-01-01",
                msg: "O destinatário deve ter nascido após 01/01/1900."
            },
        }
    },
    address_destinatary_cpf: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "O CPF do destinatário não pode ser vazio."
            },
            notNull:{
                msg: "O CPF do destinatário não pode ser nulo."
            },
            len:{
                args: [11, 11],
                msg: "O CPF do destinatário deve ter 11 caracteres."
            },
            isInt:{
                msg: "O CPF do destinatário deve conter apenas números."
            }
        }
    },
    address_destinatary_phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "O telefone do destinatário não pode ser vazio."
            },
            notNull:{
                msg: "O telefone do destinatário não pode ser nulo."
            },
            len:{
                args: [10, 11],
                msg: "O telefone do destinatário deve ter entre 10 e 11 caracteres."
            },
            isInt:{
                msg: "O telefone do destinatário deve conter apenas números."
            }
        }
    },
}, { sequelize })