const router = require('express').Router()
const {Cart, Product} = require('../db/models')
const Sequelize = require('sequelize')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      include: [{model: Product}]
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {id, price, stock} = req.body
    let cartItem = await Cart.findByPk(id)

    if (cartItem && stock > 1) {
      cartItem = await cartItem.update({
        quantity: Sequelize.literal('quantity + 1')
      })
    } else if (stock > 1) {
      res.json(
        await Cart.create({
          quantity: 1,
          pricePerItem: price,
          totalCost: price,
          productId: id
        })
      )
    } else {
      res.send('Item out of Stock!')
    }
  } catch (err) {
    next(err)
  }
})
