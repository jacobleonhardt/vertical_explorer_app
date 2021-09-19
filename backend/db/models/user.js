'use strict';
const { Validator } = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Username cannot be an email')
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    total_climbed: {
      type: DataTypes.INTEGER,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  }, {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  }
  );

  // this cannot be an arrow function
  User.prototype.toSafeObject = function() {
    const { id, username, email, total_climbed } = this
    return { id, username, email, total_climbed }
  }

  User.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString())
  }

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
   };

   User.login = async function ({ credential, password }) {

    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {

      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function({ username, email, password, total_climbed }) {
    const hashedPassword = bcrypt.hashSync(password)
    const user = await User.create({
      username,
      email,
      total_climbed,
      hashedPassword,
    })
    return await User.scope('currentUser').findByPk(user.id)
  }

  User.updateUserTotal = async function(height, user_id) {
    const { Op } = require('sequelize');
    const climbs = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          id: user_id,
        },
      },
    });

    console.log('$$$$$$$$$$$$$$$$$', climbs)
    console.log('@@@@@@@@@@@@@@@@@@', climbs.total_climbed)
    if (climbs.total_climbed === undefined) {
      console.log('>>>>> HERE <<<<<')
      climbs.total_climbed = 0
    }

    climbs.total_climbed += height
    console.log('##############', climbs.total_climbed)
    return climbs.total_climbed
  }

  User.associate = function(models) {
    User.hasMany(models.Climb, { foreignKey: 'user_id' })
  };
  return User;
};
