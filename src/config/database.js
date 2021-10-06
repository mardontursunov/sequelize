const { Sequelize } = require('sequelize')

const db = new Sequelize('sequelize', 'postgres', 'mardon', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = db