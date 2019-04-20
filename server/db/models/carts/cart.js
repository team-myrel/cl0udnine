const Sequelize = require('sequelize')
const db = require('../../db')

const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    default: 1
  },
  pricePerItem: {
    type: Sequelize.DECIMAL(10, 2),
    get() {
      return parseFloat(this.getDataValue('pricePerItem'))
    }
  },
  totalCost: {
    type: Sequelize.DECIMAL(10, 2),
    get() {
      return parseFloat(this.getDataValue('totalCost'))
    }
  }
})

module.exports = Cart
