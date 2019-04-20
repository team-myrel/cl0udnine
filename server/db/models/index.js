const User = require('./users/user')
const Product = require('./products/product')
const Cart = require('./carts/cart')
const Order = require('./order/order')
const Item = require('./order/item')

// cart belongs to many products
// products belongs to many carts
// order belongs to user
// user has many orders

// product to cart
// cart needs to hold the product id
Cart.belongsTo(Product)
Product.hasMany(Cart)

// order to user
// Order.belongsTo(User, {through: 'UserOrder'})
// User.belongsToMany(Order, {through: 'UserOrder'})


/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
Order.belongsTo(User)
User.hasMany(Order)

Item.belongsTo(Order)
Order.hasMany(Item)

Item.belongsTo(Product)
Product.hasMany(Item)

// Product.belongsToMany(User, {through: 'product_user'})
// User.belongsToMany(Product, {through: 'product_user'})

module.exports = {
  User,
  Product,
<<<<<<< HEAD
  Cart,
  Order
=======
  Order,
  Item
>>>>>>> master
}
