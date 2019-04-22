const Sequelize = require('sequelize')
const db = require('../../db')

const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    default: 1
  },
  pricePerItem: {
    type: Sequelize.INTEGER
  },
  totalCost: {
    type: Sequelize.INTEGER
  }
})

Cart.beforeSave(instance => {
  instance.totalCost = instance.quantity * instance.pricePerItem
  parseFloat(instance.totalCost)
})

Cart.beforeUpdate(instance => {
  instance.totalCost = instance.quantity * instance.pricePerItem
  parseFloat(instance.totalCost)
})

module.exports = Cart
