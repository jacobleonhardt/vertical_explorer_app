'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          id: 1,
          email: 'demo@user.io',
          username: 'Demo',
          hashedPassword: bcrypt.hashSync('password'),
          total_climbed: 90,
        }], {});

  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('Users', {
        username: { [Op.in]: ['Demo'] }
    }, {});
  }
};
