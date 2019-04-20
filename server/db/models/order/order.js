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
  price: {
    type: Sequelize.DECIMAL
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

// what will order table contain?

// order belongs to user
// user has many orders

// autoGen: orderNumber, association: userId, productId, quantity of each item, price of each item, totalCost

// Can order be like a snapshot of a cart?
