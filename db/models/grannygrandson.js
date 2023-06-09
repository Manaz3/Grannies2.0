'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GrannyGrandson extends Model {

    static associate( {Granny, Grandson }) {
      this.belongsTo(Granny, { foreignKey: "grannyId" })
      this.belongsTo(Grandson, { foreignKey: "grandsonId" })
    }
  }
  GrannyGrandson.init({
       grannyId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Grannies',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },

      grandsonId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Grandsons',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
  }, {
    sequelize,
    modelName: 'GrannyGrandson',
  });
  return GrannyGrandson;
};