/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Cart = db.model('cart')
const Product = db.model('product')

describe('Cart routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/cart/', () => {
    beforeEach(async () => {
      const product = await Product.create({
        name: 'NYC Air',
        description:
          'When you miss the secondhand smoke, sidewalk pee, and perpetual garbage day',
        scent: 'Subway Chic',
        elevation: 0,
        quality: 'Could be better',
        price: 100,
        purpose: 'Productivity and Loss of Appetite',
        imageUrl:
          'https://lh3.googleusercontent.com/GDkUTO5OsGce_APmYDByGo9uSaEk6kFjfaJNBuBhCOemLf8-sG1Zq71aAgNjChb3Am8',
        molecularComposition: 'CO2',
        stock: 15
      })

      return Cart.create({
        quantity: 2,
        pricePerItem: 6478,
        productId: product.id
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
