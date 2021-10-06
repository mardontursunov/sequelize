const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('sequelize', 'postgres', 'mardon', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize