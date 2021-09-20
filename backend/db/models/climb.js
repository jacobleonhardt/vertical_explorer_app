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

  Climb.add = async function (user_id, height, difficulty) {
    if (difficulty === undefined) difficulty = null
    const climb = await Climb.create({
      user_id,
      height,
      difficulty,
    });

    const newClimb = climb.dataValues;
    return await Climb.findByPk(newClimb.id);
  };

  Climb.delete = async function (id) {
    const climb = await Climb.findByPk(id);
    Climb.destroy({where : {id: climb.id}});
  }


  Climb.associate = function(models) {
    Climb.belongsTo(models.User, { foreignKey: 'user_id' })
  };
  return Climb;
};
