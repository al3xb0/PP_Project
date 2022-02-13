 const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //nazwa db
    process.env.DB_USER, //nazwa uzytkownika
    process.env.DB_PASSWORD, //haslo
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)