const router = require('express').Router()
const {Cart, Product, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      include: [{model: Product}],
      where: {
        userId: null
      }
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const {id, price, stock} = req.body

    let cartItem = await Cart.findOne({
      where: {
        productId: id,
        userId: null
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

router.put('/:id', async (req, res, next) => {
  try {
    const cartItemId = req.params.id

    let cartItem = await Cart.findOne({
      where: {
        id: cartItemId,
        userId: null
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
          id: req.params.id,
          userId: null
        }
      })
      res.sendStatus(204)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Cart.destroy({
      where: {
        id: req.params.id,
        userId: null
      }
    })
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
