const {expect} = require('chai')
const db = require('../../index')
const Cart = db.model('cart')

describe('Cart model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  let cart
  beforeEach(async () => {
    cart = await Cart.build({
      productId: 1,
      quantity: 2,
      pricePerItem: 6478,
      totalCost: 12956
    })
  })

  describe('definition of atttributes', () => {
    it('includes `productId`,`quantity`,`pricePerItem`,`totalCost` fields', () => {
      expect(cart.productId).to.equal(1)
      expect(cart.quantity).to.equal(2)
      expect(cart.pricePerItem).to.equal(6478)
      expect(cart.totalCost).to.equal(12956)
    })
  })
})
