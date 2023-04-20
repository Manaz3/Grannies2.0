'use strict';
const { Grandson } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const grandsons = await Grandson.bulkCreate(
      [
        {
          login: "son1",
          password: "12345",
          grannyLogin: "ba1"
        },
        {
          login: "son2",
          password: "54321",
          grannyLogin: "ba2"
        },
    ]
    )
  },

  async down (queryInterface, Sequelize) {
    await Grandson.destroy({ truncate: { cascade: true } });
  }
};
