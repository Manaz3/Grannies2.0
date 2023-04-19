'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Granny) {
      this.belongsTo(Granny, { foreignkey: grannyId})
    }
  }
  Post.init({
    title: {
      type: DataTypes.TEXT,
      allowNull:false,

    },
    value: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    picture: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    grannyId: {
     references: {
      model: 'Grannies',
      key: 'id'
     }
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};