const Sequelize = require('sequelize');
const database = require('../db');

const Day = database.define('day', {
    english: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    codeChallenge: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    roadmap: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
    },
})

module.exports = Day;