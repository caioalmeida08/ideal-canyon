import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, UUIDV4 } from "sequelize";
import User from "./userModel";
import Address from "./addressModel";
import Scooter from "./scooterModel";
import sequelize from "../database/db";

class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>>{
    declare order_id: string;
    declare order_user_id: ForeignKey<User["user_id"]>;
    declare order_address_id: ForeignKey<Address["address_id"]>;
    declare order_scooter_id: ForeignKey<Scooter["scooter_id"]>;
    declare order_payment_method: string;
    declare order_card_number: string;
    declare order_installments: number;
}

Order.init({
    order_id: {
        type: DataTypes.UUIDV4,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNull:{
                msg: "O ID da venda não pode ser nulo."
            },
            isEmpty: {
                msg: "O ID da venda não pode ser vazio."
            },
            isUUID:{
                args: 4,
                msg: "O ID da venda não atende ao formato esperado."
            }
        }
    },
    order_payment_method: {
        type: DataTypes.ENUM("pix", "credit"),
        allowNull: false,
        set(value: string){
            // threats inputs 
            this.order_payment_method = value.toLowerCase();
        },
        validate: {
            isNull: {
                msg: "O método de pagamento não pode ser nulo."
            },
            isEmpty:{
                msg: "O método de pagamento não pode ser vazio."
            },
            isIn:{
                args: [["pix", "credit"]],
                msg: "O método de pagamento informado não está disponível."
            }
        }
    },
    order_card_number: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isNull: {
                msg: "O número do cartão não pode ser nulo."
            },
            isEmpty: {
                msg: "O número do cartão não pode ser vazio."
            },
            isCreditCard: {
                args: true,
                msg: "O número do cartão não atende ao formato esperado."
            }
        }
    },
    order_installments: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isNull: {
                msg: "O número de parcelas não pode ser nulo."
            },
            isEmpty: {
                msg: "O número de parcelas não pode ser vazio."
            },
            isInt: {
                msg: "O número de parcelas não atende ao formato esperado."
            },
            min: {
                args: [1],
                msg: "O número de parcelas não pode ser menor que 1."
            },
            max: {
                args: [1],
                msg: "O número de parcelas não pode ser maior que 24."
            }
        }
    }
},{sequelize})

export default Order;