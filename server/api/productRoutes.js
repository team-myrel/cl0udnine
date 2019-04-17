const router = require('express').Router()
const Product = require('../db/models/products')

router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.param.id)
    res.json(singleProduct)
  }
  catch (err) {
    next(err)
  }
})