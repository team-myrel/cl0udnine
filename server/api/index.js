const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/products', require('./productRoutes'))
router.use('/cart', require('./cartRoutes'))
router.use('/orders', require('./orders'))
router.use('/checkout', require('./checkout'))
router.use('/isAdmin', require('./isAdmin'))


// router.use((req, res, next) => {
//   const err = new Error('API route not found!')
//   err.status = 404
//   next(err)
// })

// router.use('/', async (req, res, next) => {
//   try {
//     res.json(cart)
//   } catch (err) {
//     next(err)
//   }
// })

router.use('/', (req, res, next) => {
  const err = new Error('Access denied, yo.')
  err.status = 401
  next(err)
})

router.get('/products', (req, res, next) => {
  const err = new Error('Access denied, yo.')
  err.status = 401
  next(err)
})
