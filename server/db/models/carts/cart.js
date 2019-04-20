const Sequelize = require('sequelize')
const db = require('../../db')

const Cart = db.define('cart', {
  productId: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER,
    default: 1
  },
  pricePerItem: {
    type: Sequelize.DECIMAL
  },
  totalCost: {
    type: Sequelize.DECIMAL
  }
})

module.exports = Cart
