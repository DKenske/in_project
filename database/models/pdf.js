const Sequelize = require('sequelize');
const database = require('../database');

const Pdf = database.define('pdf', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  file_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pdf: {
    type: Sequelize.BLOB('long'),
    allowNull: false,
  },
});

module.exports = Pdf;
