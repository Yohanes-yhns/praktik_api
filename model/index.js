const sequelize = require('../config/database');
const CarsTable = require('./cars.model');
const OrdersTable = require('./orders.model');

const models = {
    CarsTable,
    OrdersTable
};

Object.values(models).forEach((model) => {
    if (model.associate) {
    model.associate(models);
    }
});

const initDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("DB Connection Successfully");
        await sequelize.sync("Model Synced");
        console.log("Model synced");
    } catch (error) {
        console.log("DB Connection failed : ",error);
    }
}

module.exports = { initDB, CarsTable , OrdersTable }