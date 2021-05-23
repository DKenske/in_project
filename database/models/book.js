const Sequelize = require('sequelize');
const database = require('../database');

const Book = database.define('book', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  book_title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  module_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Book;
