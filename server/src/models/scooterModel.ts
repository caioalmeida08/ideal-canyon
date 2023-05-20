import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize, UUIDV4 } from 'sequelize';

import sequelize from '../database/db';

class Scooter extends Model<InferAttributes<Scooter>, InferCreationAttributes<Scooter>> {
    declare scooter_id: string;
    declare scooter_model_short: string;
    declare scooter_model: string;
    declare scooter_year: number;
    declare scooter_color: string;
    declare scooter_max_speed: number;
    declare scooter_max_load: number;
    declare scooter_weight: number;
    declare scooter_dim_h: number;
    declare scooter_dim_w: number;
    declare scooter_dim_l: number;
    declare scooter_battery_type: string;
    declare scooter_battery_capacity: number;
    declare scooter_battery_range: number;
    declare scooter_charging_time: number;
    declare scooter_charging_power: number;
    declare scooter_charging_voltage: string;
    declare scooter_charging_output: number;
    declare scooter_description: string;
    declare scooter_price: number;
    declare scooter_is_active: boolean;
    declare scooter_is_sold: boolean;
}

Scooter.init({
    scooter_id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
        validate: {
            isUUID: {
                args: 4,
                msg: "ID da scooter deve ser um UUIDv4 válido."
            },
        }
    },
    scooter_model_short: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Modelo abreviado da scooter não pode ser vazio."
            },
            notNull: {
                msg: "Modelo abreviado da scooter não pode ser nulo."
            },
            len: {
                args: [1, 100],
                msg: "Modelo da scooter deve ter entre 1 e 100 caracteres."
            },
        }
    },
    scooter_model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "Modelo da scooter não pode ser vazio."
            },
            notNull: {
                msg: "Modelo da scooter não pode ser nulo."
            },
            len: {
                args: [1, 100],
                msg: "Modelo da scooter deve ter entre 1 e 100 caracteres."
            },
        }
    },
    scooter_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Ano da scooter não pode ser vazio."
            },
            notNull: {
                msg: "Ano da scooter não pode ser nulo."
            },
            isInt: {
                msg: "Ano da scooter deve ser um número inteiro de quatro dígitos."
            },
            min: {
                args: [1900],
                msg: "Ano da scooter deve ser maior ou igual a 1900."
            },
            max: {
                args: [new Date().getFullYear() + 1],
                msg: "Ano da scooter deve ser menor ou igual ao próximo ano."
            },
            len: {
                args: [4, 4],
                msg: "Ano da scooter deve ter 4 dígitos."
            },
        }
    },
    scooter_color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Cor da scooter não pode ser vazia."
            },
            notNull: {
                msg: "Cor da scooter não pode ser nula."
            },
            len: {
                args: [1, 100],
                msg: "Cor da scooter deve ter entre 1 e 100 caracteres."
            },
        }
    },
    scooter_max_speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Velocidade máxima da scooter (km/h) não pode ser vazia."
            },
            notNull: {
                msg: "Velocidade máxima da scooter (km/h) não pode ser nula."
            },
            isInt: {
                msg: "Velocidade máxima da scooter (km/h) deve ser um número inteiro."
            },
            min: {
                args: [1],
                msg: "Velocidade máxima da scooter (km/h) deve ser maior ou igual a 1."
            },
            max: {
                args: [200],
                msg: "Velocidade máxima da scooter (km/h) deve ser menor ou igual a 200."
            },
        }
    },
    scooter_max_load: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Carga máxima da scooter (kg) não pode ser vazia."
            },
            notNull: {
                msg: "Carga máxima da scooter (kg) não pode ser nula."
            },
            isInt: {
                msg: "Carga máxima da scooter (kg) deve ser um número inteiro."
            },
            min: {
                args: [1],
                msg: "Carga máxima da scooter (kg) deve ser maior ou igual a 1."
            },
            max: {
                args: [300],
                msg: "Carga máxima da scooter (kg) deve ser menor ou igual a 300."
            },
        }
    },
    scooter_weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Peso da scooter (kg) não pode ser vazio."
            },
            notNull: {
                msg: "Peso da scooter (kg) não pode ser nulo."
            },
            isInt: {
                msg: "Peso da scooter (kg) deve ser um número real."
            },
            min: {
                args: [1],
                msg: "Peso da scooter (kg) deve ser maior ou igual a 1."
            },
            max: {
                args: [300],
                msg: "Peso da scooter (kg) deve ser menor ou igual a 300."
            },
        }
    },
    scooter_dim_h: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Altura da scooter (m) não pode ser vazia."
            },
            notNull: {
                msg: "Altura da scooter (m) não pode ser nula."
            },
            isFloat: {
                msg: "Altura da scooter (m) deve ser um número real. Ex: 1.5"
            },
        }
    },
    scooter_dim_w: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Largura da scooter (m) não pode ser vazia."
            },
            notNull: {
                msg: "Largura da scooter (m) não pode ser nula."
            },
            isFloat: {
                msg: "Largura da scooter (m) deve ser um número real. Ex: 1.5"
            },
        }
    },
    scooter_dim_l: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Comprimento da scooter (m) não pode ser vazio."
            },
            notNull: {
                msg: "Comprimento da scooter (m) não pode ser nulo."
            },
            isFloat: {
                msg: "Comprimento da scooter (m) deve ser um número real. Ex: 1.5"
            },
        }
    },
    scooter_battery_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Tipo de bateria da scooter não pode ser vazio."
            },
            notNull: {
                msg: "Tipo de bateria da scooter não pode ser nulo."
            },
            len: {
                args: [1, 100],
                msg: "Tipo de bateria da scooter deve ter entre 1 e 100 caracteres."
            },
        }
    },
    scooter_battery_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Capacidade da bateria (Ah) da scooter não pode ser vazia."
            },
            notNull: {
                msg: "Capacidade da bateria (Ah) da scooter não pode ser nula."
            },
            isInt: {
                msg: "Capacidade da bateria (Ah) da scooter deve ser um número inteiro."
            },
        }
    },
    scooter_battery_range: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Autonomia da bateria (km) da scooter não pode ser vazia."
            },
            notNull: {
                msg: "Autonomia da bateria (km) da scooter não pode ser nula."
            },
            isInt: {
                msg: "Autonomia da bateria (km) da scooter deve ser um número inteiro."
            },
        }
    },
    scooter_charging_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Tempo de carregamento (min) da scooter não pode ser vazio."
            },
            notNull: {
                msg: "Tempo de carregamento (min) da scooter não pode ser nulo."
            },
            isInt: {
                msg: "Tempo de carregamento (min) da scooter deve ser um número inteiro."
            },
            min: {
                args: [1],
                msg: "Tempo de carregamento (min) da scooter deve ser maior ou igual a 1."
            },
            max: {
                args: [1440],
                msg: "Tempo de carregamento (min) da scooter deve ser menor ou igual a 1440."
            },
        }
    },
    scooter_charging_power: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Potência de carregamento (W) da scooter não pode ser vazia."
            },
            notNull: {
                msg: "Potência de carregamento (W) da scooter não pode ser nula."
            },
            isInt: {
                msg: "Potência de carregamento (W) da scooter deve ser um número inteiro."
            },
        }
    },
    scooter_charging_voltage: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Tensão de carregamento (V) da scooter não pode ser vazia."
            },
            notNull: {
                msg: "Tensão de carregamento (V) da scooter não pode ser nula."
            },
            isIn: {
                args: [["110", "220", "110/220"]],
                msg: "Tensão de carregamento (V) da scooter deve ser 110 ou 220. Para ambos, use 110/220."
            },
        }
    },
    scooter_charging_output: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Corrente de carregamento (A) da scooter não pode ser vazia."
            },
            notNull: {
                msg: "Corrente de carregamento (A) da scooter não pode ser nula."
            },
            isInt: {
                msg: "Corrente de carregamento (A) da scooter deve ser um número inteiro."
            },
        }
    },
    scooter_description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Descrição da scooter não pode ser vazia."
            },
            notNull: {
                msg: "Descrição da scooter não pode ser nula."
            },
            len: {
                args: [1, 3000],
                msg: "Descrição da scooter deve ter entre 1 e 3000 caracteres."
            },
        }
    },
    scooter_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Preço da scooter (R$) não pode ser vazio."
            },
            notNull: {
                msg: "Preço da scooter (R$) não pode ser nulo."
            },
            isFloat: {
                msg: "Preço da scooter (R$) deve ser um número real."
            },
            min: {
                args: [0],
                msg: "Preço da scooter (R$) deve ser maior ou igual a 0."
            },
            max: {
                args: [100000],
                msg: "Preço da scooter (R$) deve ser menor ou igual a 100000."
            },

        }
    },
    scooter_is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Ativação da scooter (true/false) não pode ser vazia."
            },
            notNull: {
                msg: "Ativação da scooter (true/false) não pode ser nula."
            },
            isIn: {
                args: [[true, false]],
                msg: "Ativação da scooter (true/false) deve ser true ou false."
            },
        }
    },
    scooter_is_sold: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Venda da scooter (true/false) não pode ser vazia."
            },
            notNull: {
                msg: "Venda da scooter (true/false) não pode ser nula."
            },
            isIn: {
                args: [[true, false]],
                msg: "Venda da scooter (true/false) deve ser true ou false."
            },
        }
    }
}, {
    sequelize,
    freezeTableName: true,
});

(async () => {
    await sequelize.sync();
})();

export default Scooter;
