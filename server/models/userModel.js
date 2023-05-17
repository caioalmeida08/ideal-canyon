const { DataTypes } = require("sequelize");
const sequelize = require("../database/db.js").sequelize;

const Address = require("./addressModel.js");

const User = sequelize.define("user", {
    user_id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    user_nickname: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [3, 32],
                msg: "O apelido do usuário deve ter entre 3 e 32 caracteres."
            },
            isAlpha: {
                args: true,
                msg: "O apelido do usuário deve conter apenas letras."
            },
        }
    },
    user_full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [3, 64],
                msg: "O nome completo do usuário deve ter entre 3 e 64 caracteres."
            },
            notEmpty: {
                args: true,
                msg: "O nome completo do usuário não pode ser vazio."
            },
        }
    },
    user_date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: {
                args: true,
                msg: "A data de nascimento do usuário deve ser uma data válida."
            },
            isAfter: {
                args: '1900-01-01',
                msg: "A data de nascimento do usuário deve ser posterior a 01/01/1900."
            },
            isBefore: {
                // Before 18 years 
                args: new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0],
                msg: "A data de nascimento do usuário deve ser anterior a data atual. O usuário deve ter no mínimo 18 anos."
            },
            notEmpty: {
                args: true,
                msg: "A data de nascimento do usuário não pode ser vazia."
            },
        }
    },
    user_cpf: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isNumeric: {
                args: true,
                msg: "O CPF do usuário deve conter apenas números."
            },
            len: {
                args: [11, 11],
                msg: "O CPF do usuário deve conter 11 dígitos."
            },
            notEmpty: {
                args: true,
                msg: "O CPF do usuário não pode ser vazio."
            },
        }
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                args: true,
                msg: "O email do usuário deve ser um email válido."
            },
            len: {
                args: [5, 64],
                msg: "O email do usuário deve ter entre 5 e 64 caracteres."
            },
            notEmpty: {
                args: true,
                msg: "O email do usuário não pode ser vazio."
            },
        },
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [8, 100],
                msg: "A senha do usuário deve ter entre 8 e 100 caracteres."
            },
            notEmpty: {
                args: true,
                msg: "A senha do usuário não pode ser vazia."
            },
        }
    },
    user_phone1: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isNumeric: {
                args: true,
                msg: "O telefone do usuário deve conter apenas números."
            },
            len: {
                args: [10, 11],
                msg: "O telefone do usuário deve conter entre 10 e 11 dígitos."
            },
            notEmpty: {
                args: true,
                msg: "O telefone do usuário não pode ser vazio."
            },
        }
    },
    user_phone2: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isNumeric: {
                args: true,
                msg: "O telefone do usuário deve conter apenas números."
            },
            len: {
                args: [10, 11],
                msg: "O telefone do usuário deve conter entre 10 e 11 dígitos."
            },
            notEmpty: {
                args: true,
                msg: "O telefone do usuário não pode ser vazio."
            },
        }
    },
}, { sequelize });

User.hasMany(Address, {
    foreignKey: {
        name: "address_user_id",
    }
});

Address.belongsTo(User);

module.exports = User;