'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GrannyGrandsons', {
      
      grannyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Grannies',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },

      grandsonId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Grandsons',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GrannyGrandsons');
  }
};