const router = require('express').Router()
const {Cart, Product} = require('../db/models')
const stripe = require('stripe')('sk_test_LPYtVdZCR1sLCh2HHFFxc31100Cc9B5tLq')
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

router.post('/', async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body
    })

    res.json({status})
  } catch (err) {
    res.status(500).end()
  }
})
