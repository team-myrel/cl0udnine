const router = require('express').Router()
const {User, Order, Product, Cart} = require('../db/models')
const isAdmin = require('./isAdmin')
module.exports = router

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/orders', async (req, res, next) => {
  try {
    let order = await Order.findOne({
      include: [{model: User, where: {id: req.params.userId}}]
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/cart', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      include: [{model: Product}, {model: User}],
      where: {userId: req.params.userId}
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId/checkout', async (req, res, next) => {
  try {
    let cart = await Cart.findAll({
      include: [{model: Product}],
      where: {
        userId: req.params.userId,
        orderId: null
      }
    })

    let newOrder = await Order.create({
      status: 'Ready for dispatch',
      quantity: cart.length,
      total: cart.reduce((acc, curr) => {
        acc += curr.quantity * curr.pricePerItem
      }, 0),
      userId: req.params.userId
    })

    cart = await Cart.update(
      {orderId: newOrder.id},
      {where: {userId: req.params.userId, orderId: null}}
    )

    res.send(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId/cart', async (req, res, next) => {
  try {
    const {id, price, stock} = req.body

    let cartItem = await Cart.findOne({
      where: {
        productId: id,
        userId: req.params.userId
      }
    })

    if (cartItem && stock > 1) {
      let quant = cartItem.quantity
      cartItem = await cartItem.update({
        quantity: quant + 1
      })
      res.json(cartItem)
    } else if (stock > 1) {
      res.json(
        await Cart.create({
          quantity: 1,
          pricePerItem: price,
          productId: id,
          userId: req.params.userId
        })
      )
    } else {
      res.send('Item out of Stock!')
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:userId/cart/:productId', async (req, res, next) => {
  try {
    const cartItemId = req.params.productId

    let cartItem = await Cart.findOne({
      where: {
        id: cartItemId,
        userId: req.params.userId
      }
    })

    let quant = cartItem.quantity

    if (req.body.change === 'inc') {
      cartItem = await cartItem.update({
        quantity: quant + 1
      })
      res.json(cartItem)
    } else if (req.body.change === 'dec' && quant > 1) {
      cartItem = await cartItem.update({
        quantity: quant - 1
      })
      res.json(cartItem)
    } else if (req.body.change === 'dec' && quant === 1) {
      await Cart.destroy({
        where: {
          id: req.params.productId,
          userId: req.params.userId
        }
      })
      res.sendStatus(204)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:userId/cart/:productId', async (req, res, next) => {
  try {
    await Cart.destroy({
      where: {
        id: req.params.productId
      }
    })
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
