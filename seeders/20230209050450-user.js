'use strict';

const bcrypt = require('bcrypt');

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
      let passwordHash = await bcrypt.hash("123456",10) 
      await queryInterface.bulkInsert('Users', [
        {
        name: 'Admin',
        email: "admin@gmail.com",
        password : passwordHash,
        createdAt,
        updatedAt : createdAt
      },
      {
        name: 'Jhon Doe',
        email: "rizki@gmail.com",
        password : passwordHash,
        createdAt,
        updatedAt : createdAt
      },
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * */
    const timestamp = 1234567890;
    const createdAt = new Date(timestamp * 1000);
    let passwordHash = await bcrypt.hash("123456",10) 
     await queryInterface.bulkDelete('Users', [
      {
        name: 'Admin',
        email: "admin@gmail.com",
        password : passwordHash,
        createdAt,
        updatedAt : createdAt
      },
      {
        name: 'Jhon Doe',
        email: "rizki@gmail.com",
        password : passwordHash,
        createdAt,
        updatedAt : createdAt
      }
     ], {});
     
  }
};
