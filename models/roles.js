'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roles.belongsToMany(models.Users, {
        as : "roles",
        through : {
          model : "userRole",
          as : "test"
        }
      });
    }
  }
  Roles.init({
    name: DataTypes.STRING,
    isInternal: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Roles;
};