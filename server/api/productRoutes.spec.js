/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    const nycAir = {
      name: 'NYC Air',
      description:
        'When you miss the secondhand smoke, sidewalk pee, and perpetual garbage day',
      scent: 'Subway Chic',
      elevation: 0,
      quality: 'Could be better',
      price: 100,
      benefits: 'Productivity and Loss of Appetite',
      imageUrl:
        'https://lh3.googleusercontent.com/GDkUTO5OsGce_APmYDByGo9uSaEk6kFjfaJNBuBhCOemLf8-sG1Zq71aAgNjChb3Am8',
      molecularComposition: 'CO2',
      quantity: 15
    }

    beforeEach(() => {
      return Product.create({
        name: nycAir.name,
        description: nycAir.description,
        scent: nycAir.scent,
        elevation: nycAir.elevation,
        quality: nycAir.quality,
        price: nycAir.price,
        benefits: nycAir.benefits,
        imageUrl: nycAir.imageUrl,
        molecularComposition: nycAir.molecularComposition,
        quantity: nycAir.quantity
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      //expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(nycAir.name)
      expect(res.body[0].description).to.be.equal(nycAir.description)
      expect(res.body[0].scent).to.be.equal(nycAir.scent)
    })
  }) // end describe('/api/products')
}) // end describe('Product routes')
