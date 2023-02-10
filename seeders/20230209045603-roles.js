'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
    const timestamp = 1234567890;
const createdAt = new Date(timestamp * 1000);
      await queryInterface.bulkInsert('Roles', [
      {
        name: 'admin',
        isInternal: true,
        createdAt,
        updatedAt : createdAt
      },
      {
        name: 'user',
        isInternal: false,
        createdAt,
        updatedAt : createdAt
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
    const timestamp = 1234567890;
const createdAt = new Date(timestamp * 1000);
      await queryInterface.bulkDelete('Roles',[
        {
          name: 'admin',
          isInternal: true,
         
          createdAt,
          updatedAt : createdAt
        },
        {
          name: 'user',
          isInternal: false,
          createdAt,
          updatedAt : createdAt 
        },
      ] , {});
  }
};
