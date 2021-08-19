'use strict';
module.exports = (sequelize, DataTypes) => {
  const Climb = sequelize.define('Climb', {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.DECIMAL,
    },
  }, {});



  Climb.associate = function(models) {
    Climb.belongsTo(models.User, { foreignKey: 'user_id' })
  };
  return Climb;
};
