const Sequelize = require('sequelize');
const database = require('../database');

const Turma = database.define('curso', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  ativo: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Turma;
