const Sequelize = require('sequelize');
const database = require('../database');

const Module = database.define('module', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  module_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Module;
