const router = require('express').Router()
const {Order, Product, Item} = require('../db/models')
const isUser = require('./isUser')
module.exports = router

router.get('/:userId', isUser, async (req, res, next) => {
  try {
    const {userId} = req.params
    const orders = await Order.findAll({
      where: {userId},
      include: [{model: Item, include: {model: Product}}]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/singleOrder/:orderId', isUser, async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId, {
      include: [{model: Item, include: {model: Product}}]
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})
