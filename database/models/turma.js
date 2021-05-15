const Sequelize = require('sequelize');
const database = require('../database');

const Turma = database.define('turma', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  curso: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ativo: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Turma;
