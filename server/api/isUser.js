const isUser = (req, res, next) => {
  if (Number(req.user.id) !== Number(req.params.id)) {
    const err = new Error('Access denied')
    err.status = 401
    next(err)
  } else {
    next()
  }
}

module.exports = isUser
