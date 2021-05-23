const Sequelize = require('sequelize');
const database = require('../database');

const Content = database.define('content', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  video_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  game_url: {
    type: Sequelize.STRING,
    allowNull: false,
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

module.exports = Content;
