/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Cart = db.model('cart')

describe('Cart routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/cart/', () => {
    beforeEach(() => {
      return Cart.create({
        productId: 1,
        quantity: 2,
        pricePerItem: 6478,
        totalCost: 12956
      })
    })

    it('GET /api/cart', async () => {
      const res = await request(app)
        .get('/api/cart')
        .expect(200)

      //expect(res.body).to.be.an('array')
      expect(res.body[0].productId).to.equal(1)
      expect(res.body[0].quantity).to.equal(2)
      expect(res.body[0].pricePerItem).to.equal(6478)
      expect(res.body[0].totalCost).to.equal(12956)
    })
  }) // end describe('/api/products')
}) // end describe('Product routes')
