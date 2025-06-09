const { DataTypes } = require ('sequelize');
const dbConn = require('../config/database');

const CarsTable = dbConn.define('cars', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    cars_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cars_brand: {
        type: DataTypes.STRING,
        allowNull: true
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    tableName : 'cars',
    timestamps:false,
});

CarsTable.associate = function(model) {
    CarsTable.hasMany(model.OrdersTable, { foreignKey: "cars_id" });
}

module.exports = CarsTable;