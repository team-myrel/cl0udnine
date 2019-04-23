const router = require('express').Router()
<<<<<<< HEAD
const {Product} = require('../db/models')
=======
const { Product } = require('../db/models')
>>>>>>> stash
// const isAdmin = require('./isAdmin')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
<<<<<<< HEAD
    const allProducts = await Product.findAll({order: [['id', 'ASC']]})
=======
    const allProducts = await Product.findAll(
      { order: [['id', 'ASC']] }
    )
>>>>>>> stash
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id)
    res.json(singleProduct)
  } catch (err) {
    next(err)
  }
})
