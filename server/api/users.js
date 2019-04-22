const router = require('express').Router()
const {User, Order, Item, Product, Cart} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
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
    console.log('req.params', req.params)
    const cart = await Cart.findAll({
      include: [{model: Product}]
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId/cart', async (req, res, next) => {
  try {
    const {id, price, stock} = req.body

    let cartItem = await Cart.findOne({
      where: {
        productId: id
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

router.put('/:userId/cart/:productId', async (req, res, next) => {
  try {
    const cartItemId = req.params.productId

    let cartItem = await Cart.findOne({
      where: {
        id: cartItemId
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
          id: req.params.productId
        }
      })
      res.sendStatus(204)
    }
  } catch (err) {
    next(err)
  }
})

router.delete(':userId/cart/:productId', async (req, res, next) => {
  try {
    await Cart.destroy({
      where: {
        id: req.params.productId,
        userId: req.params.userId
      }
    })
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
