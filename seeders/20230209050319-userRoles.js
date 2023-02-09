'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     *  */
    const timestamp = 1234567890;
    const createdAt = new Date(timestamp * 1000);
      await queryInterface.bulkInsert('userRoles', [
        {
        UserId:1,
        RoleId: 1,
        createdAt,
        updatedAt : createdAt
      },
      {
        UserId:2,
        RoleId: 2,
        createdAt,
        updatedAt : createdAt
      }
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     */
    const timestamp = 1234567890;
    const createdAt = new Date(timestamp * 1000);
      await queryInterface.bulkDelete('userRoles', [
        {
        UserId:1,
        RoleId: 1,
        createdAt,
        updatedAt : createdAt
      },
      {
        UserId:2,
        RoleId: 2,
        createdAt,
        updatedAt : createdAt
      }
    ], {});
  }
};
