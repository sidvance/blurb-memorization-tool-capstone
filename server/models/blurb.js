const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Blurb: sequelize.define('blurb', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        source: DataTypes.STRING,
        quote: DataTypes.STRING
    })
}