'use strict';
module.exports = (sequelize, DataTypes) => {
  const Climb = sequelize.define('Climb', {
    user_id: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    difficulty: DataTypes.DECIMAL
  }, {});
  Climb.associate = function(models) {
    Climb.belongsTo(User, { foreignKey: user_id })
  };
  return Climb;
};
