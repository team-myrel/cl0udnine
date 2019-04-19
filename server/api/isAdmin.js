const admin = (req, res, next) => {
  if (!req.user.isAdmin) {
    const err = new Error('Access denied')
    err.status = 401
    next(err)
  } else {
    next()
  }
}

module.exports = admin
