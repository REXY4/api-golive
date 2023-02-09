'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      posision: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      password : {
        type: Sequelize.STRING
      },
      ktp: {
        type: Sequelize.BIGINT
      },
      placeAndBrith: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      religion: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      idCardAddress: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING
      },
      noTelp: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};