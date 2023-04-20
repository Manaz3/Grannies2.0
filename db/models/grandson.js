'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grandson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({GrannyGrandson}) {
      this.hasMany(GrannyGrandson, { foreignKey: "grandsonId" })
    }
  }
  Grandson.init({
    login: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    grannyLogin: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Grandson',
  });
  return Grandson;
};