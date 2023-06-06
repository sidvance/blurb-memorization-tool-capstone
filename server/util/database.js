require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

//invoking new instance of sequelize and saving as variable
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

//exporting new instance
module.exports = {
    sequelize
}
