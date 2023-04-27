const { DataTypes } = require("sequelize");
const sequelize = require("../database/db.js").sequelize;

const Scooter = sequelize.define("scooter", {
    scooter_id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    scooter_model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 32],
            notEmpty: true,
        }
    },
    scooter_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [4, 4],
            notEmpty: true,
        }
    },
    scooter_color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 32],
            notEmpty: true,
        }
    },
    scooter_max_speed: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 3],
            notEmpty: true,
        }
    },
    scooter_max_load: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 3],
            notEmpty: true,
        }
    },
    scooter_weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 3],
            notEmpty: true,
        }
    },
    scooter_dim_h: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 3],
            notEmpty: true,
        }
    },
    scooter_dim_w: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 3],
            notEmpty: true,
        }
    },
    scooter_dim_l: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 3],
            notEmpty: true,
        }
    },
    scooter_battery_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 32],
            notEmpty: true,
        }
    },
    scooter_battery_capacity: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 3],
            notEmpty: true,
        }
    },
    scooter_battery_range: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 3],
            notEmpty: true,
        }
    },
    scooter_charging_time: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 3],
            notEmpty: true,
        }
    },
    scooter_charger_power: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 2],
            notEmpty: true,
        }
    },
    scooter_charger_voltage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 3],
            notEmpty: true,
        }
    },
    scooter_charger_output: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 3],
            notEmpty: true,
        }
    },
    scooter_description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 512],
            notEmpty: true,
        }
    },
    scooter_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [1, 6],
            notEmpty: true,
        }
    },
    scooter_is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    scooter_is_sold: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
}, { sequelize });

module.exports = Scooter;