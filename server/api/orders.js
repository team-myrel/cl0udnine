const router = require('express').Router()
const {Order, Product, Item} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
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

router.get('/:userId/singleOrder/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId, {
      include: [{model: Item, include: {model: Product}}]
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})
