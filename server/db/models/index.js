const User = require('./users/user')
const Product = require('./products/product')
const Order = require('./order/order')
const Item = require('./order/item')
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
  Order,
  Item
}
