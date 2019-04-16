const router = require('express').Router()
const {User} = require('../db/models')
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

router.get('/login', (req, res, next) => res.send('LOGIN'))
router.get('/register', (req, res, next) => res.send('REGISTER'))
router.post('/register', (req, res, next) => {
  // const {name, email, password} = req.body;
})
