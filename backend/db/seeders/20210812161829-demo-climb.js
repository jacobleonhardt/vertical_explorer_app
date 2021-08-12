'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Climbs', [
        {
          id: 1,
          user_id: 1,
          height: 30,
          difficulty: 5.9,
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        id: 2,
        user_id: 1,
        height: 30,
        difficulty: 5.6,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      id: 3,
      user_id: 1,
      height: 30,
      difficulty: 5.10,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Climbs', {
      id: { [Op.gt]: 0 },
    }, {});
  }
};
