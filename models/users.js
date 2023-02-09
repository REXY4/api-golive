'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsToMany(models.Roles, {
        as : "roles",
        through : {
          model : "userRole",
          as : "userRole"
        }
      });

    }
  }
  Users.init({
    posision: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    ktp: DataTypes.BIGINT,
    placeAndBrith: DataTypes.STRING,
    gender: DataTypes.STRING,
    religion: DataTypes.STRING,
    status: DataTypes.STRING,
    idCardAddress: DataTypes.TEXT,
    address: DataTypes.TEXT,
    email: DataTypes.STRING,
    noTelp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};