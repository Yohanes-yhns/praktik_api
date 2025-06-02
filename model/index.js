const sequelize = require('../config/database');
const CarsTable = require('./cars.model');

const initDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("DB Connection Successfully");
        await sequelize.sync("Model Synced");
    } catch (error) {
        console.log("DB Connection failed : ",error);
    }
}

module.exports = { initDB, CarsTable }