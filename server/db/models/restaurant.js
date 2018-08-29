const Sequelize = require('sequelize');
const db = require('../db');

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
  },
});

module.exports = Restaurant;
