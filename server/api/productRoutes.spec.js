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
      purpose: 'Productivity and Loss of Appetite',
      imageUrl:
        'https://lh3.googleusercontent.com/GDkUTO5OsGce_APmYDByGo9uSaEk6kFjfaJNBuBhCOemLf8-sG1Zq71aAgNjChb3Am8',
      molecularComposition: 'CO2',
      stock: 15
    }

    beforeEach(() => {
      return Product.create({
        name: nycAir.name,
        description: nycAir.description,
        scent: nycAir.scent,
        elevation: nycAir.elevation,
        quality: nycAir.quality,
        price: nycAir.price,
        purpose: nycAir.purpose,
        imageUrl: nycAir.imageUrl,
        molecularComposition: nycAir.molecularComposition,
        stock: nycAir.stock
      })
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      //expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.equal(nycAir.name)
      expect(res.body[0].description).to.equal(nycAir.description)
      expect(res.body[0].scent).to.equal(nycAir.scent)
    })
    it('gives a product based on the id specified', async () => {
      const res = await request(app)
        .get('/api/products/1')
        .expect(200)
      expect(res.body).to.be.an('object')
    })
  })
}) // end describe('Product routes')
