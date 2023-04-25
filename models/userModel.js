const { DataTypes } = require("sequelize");
const sequelize = require("../database/db.js").sequelize;

const User = sequelize.define("user", {
    user_id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    user_nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 32],
            isAlpha: true,
            notEmpty: true,
        }
    },
    user_full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 64],
            notEmpty: true,
        }
    },
    user_date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true,
            isAfter: '1900-01-01',
            isBefore: '2005-01-01',
            notEmpty: true,
        }
    },
    user_cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: true,
            len: [11, 11],
            notEmpty: true,
        }
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            len: [5, 64],
            notEmpty: true,
        },
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 32],
            notEmpty: true,
        }
    },
    user_phone1: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: true,
            len: [10, 11],
            notEmpty: true,
        }
    },
    user_phone2: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isNumeric: true,
            len: [10, 11],
            notEmpty: true,
        }
    },
});

(async () => {
    await sequelize.sync({ force: false });
})();

module.exports = User;