'use strict';
const bcrypt = require('bcrypt')
const { Granny, Post } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Granny.bulkCreate(
      [
        {
          login: 'ba1',
          password: await bcrypt.hash('ba1', 10),
          Posts: [
            {
              value: "maNiggas",
              picture: "url1"
            },
            {
              value: "notMaNiggas",
              picture: "url2"
            },
          ]
        },
        
        {
          login: 'ba2',
          password: await bcrypt.hash('ba2', 10),
          Posts: [
            {
              value: "maNiggas2",
              picture: "url12"
            },
            {
              value: "notMaNiggas2",
              picture: "url22"
            },
          ]
        }
      ],
      {
        include: [Post]
      }
    )
    await Granny.bulkCreate
    // создаю еще массив из двух объектов с ключами grannyId:1 grandsonId:1 и grannyId:1 grandsonId:2
  },

  

  async down (queryInterface, Sequelize) {
    await Granny.destroy({ truncate: { cascade: true } });
  }
};
