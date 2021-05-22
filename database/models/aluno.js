const Sequelize = require('sequelize');
const database = require('../database');

const Aluno = database.define('aluno', {
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
  sexo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  turma: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  idade: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  ativo: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Aluno;
