import {Model, InferAttributes, InferCreationAttributes, DataTypes, UUIDV4} from "sequelize"
import bcrypt from "bcrypt";

import sequelize from "../database/db"
import Address from "./addressModel";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
    declare user_id: string;
    declare user_nickname: string;
    declare user_full_name: string;
    declare user_date_of_birth: string;
    declare user_cpf: string;
    declare user_email: string;
    declare user_password: string;
    declare user_phone_1: number;
    declare user_phone_2: number;
}

User.init({
    user_id: {
        type: DataTypes.UUIDV4,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O ID do usuário não pode ser nulo."
            },
            notNull: {
                msg: "O ID do usuário não pode ser vazio."
            },
            isUUID:{
                args: 4,
                msg: "O ID do usuário não corresponde ao formato esperado."
            }
        }
    },
    user_nickname: {
        type: DataTypes.STRING,
        get() {
            // check if a custom nickname is already set and return it if so
            if (this.getDataValue("user_nickname") != null) return this.getDataValue("user_nickname");

            // if no custom nickname is set
            // get the full user name
            const userFullName = this.getDataValue("user_full_name");
            
            // split and get the first name
            const userFirstName = userFullName.split(" ")[0];

            // return the first name
            return userFirstName;
        },   
        set(value){
            this.setDataValue("user_nickname", value as string)
        },
        validate:{
            notEmpty: {
                msg: "O apelido do usuário não pode ser vazio."
            },
            len: {
                args: [3, 64],
                msg: "O apelido de usuário deve ter de 3 a 64 caractéres de comprimento."
            },
            isAlpha:{
                msg: "O apelido de usuario deve conter apenas letras."
            },
        }
    },
    user_full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "O nome completo do usuário não pode ser vazio."
            },
            notNull: {
                msg: "O nome completo do usuário não pode ser nulo."
            },
            len: {
                args: [3, 255],
                msg: "O nome completo do usuário deve ter de 3 a 255 caractéres de comprimento."
            },
            is: {
                args: /^[a-zA-ZÀ-ÿ\s]*$/,
                msg: "O nome completo do usuário deve conter apenas letras e espaços."
            },
        }
    },
    user_date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "A data de nascimento do usuário não pode ser vazia."
            },
            notNull: {
                msg: "A data de nascimento do usuário não pode ser nula."
            },
            isDate: {
                args: true,
                msg: "A data de nascimento do usuário deve ser uma data válida."
            },
            isAfter: {
                args: "1900-01-01",
                msg: "A data de nascimento do usuário deve ser posterior a 01/01/1900."
            },
            isBefore: {
                // before 18 years ago
                args: new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0],
                msg: "O usuário deve ter mais de 18 anos."
            },
        }
    },
    user_cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: {
                msg: "O CPF do usuário não pode ser nulo."
            },
            notEmpty: {
                msg: "O CPF do usuário não pode ser vazio."
            },
            isNumeric: {
                msg: "O CPF do usuário deve conter apenas números."
            },
            len: {
                args: [11, 11],
                msg: "O CPF do usuário deve conter 11 dígitos."
            },
        }
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: {
                msg: "O e-mail do usuário não pode ser nulo."
            },
            notEmpty: {
                msg: "O e-mail do usuário não pode ser vazio."
            },
            isEmail: {
                msg: "O e-mail do usuário deve ser um e-mail válido."
            },
            len: {
                args: [3, 255],
                msg: "O e-mail do usuário deve ter de 3 a 255 caractéres de comprimento."
            },
        }

    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value: string){
            // hash password prior to saving it in database
            value = bcrypt.hashSync(value, 10)
            this.setDataValue("user_password", value as string)
        },
        validate:{
            notNull: {
                msg: "A senha do usuário não pode ser nula."
            },
            notEmpty: {
                msg: "A senha do usuário não pode ser vazia."
            },
            len: {
                args: [8, 255],
                msg: "A senha do usuário deve ter de 8 a 255 caractéres de comprimento."
            },
        }
    },
    user_phone_1: {
        type: DataTypes.INTEGER,
    },
    user_phone_2: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize
})

User.hasMany(Address, {
    sourceKey: "user_id",
    foreignKey: "address_user_id",
    as: "user_addresses"
});

Address.belongsTo(User, { 
    targetKey: 'user_id',
    foreignKey: 'address_user_id'
});

export default User;