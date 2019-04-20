const router = require('express').Router()
const {Order, Product, Item} = require('../db/models')

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
