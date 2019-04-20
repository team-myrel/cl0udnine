const Sequelize = require('sequelize')
const db = require('../../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'OPEN'
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1,
      max: 20
    }
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isNumeric: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    isGuest: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  }
  //  {
  //   instanceMethods: {
  //     getTotalPrice: function () {
  //       //* TODO: work on getTotalPrice
  // .catch(err => {
  //       console.error(err);
  //     })
  //   }
  // }
})

module.exports = Order
