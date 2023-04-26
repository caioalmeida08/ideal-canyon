const { DataTypes } = require("sequelize");
const sequelize = require("../database/db.js").sequelize;

const Address = sequelize.define('address', {
    address_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
}, { sequelize });

(async () => {
    await sequelize.sync({ force: false });
})();

module.exports = Address;