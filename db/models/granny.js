'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Granny extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({GrannyGrandson, Post}) {
      this.hasMany(GrannyGrandson, { foreignKey: "grannyId" })
      this.hasMany(Post, { foreignKey: "grannyId" })
    }
  }
  Granny.init({
    login: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Granny',
  });
  return Granny;
};