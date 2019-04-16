const { expect } = require('chai');
const db = require('../../index');
const Product = db.model('product');

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  });
  let product
  beforeEach(async() => {
    product = await Product.build({
      name: 'AIR',
      description: 'This is a test',
      scent: 'Fresh',
      elevation: 3000,
      quality: 'Pure',
      price: 5.99,
      benefits: 'feel good',
      molecularComposition: 'O2N2CO2',
      quantity: 5
    })
  })

  describe('definition of atttributes', () => {
    it('includes `name`,`description`,`scent`,`elevation`,`quality`, `price`,`benefits`,`imgUrl`,`molecularComposition`,`quantity` fields', () => {
        expect(product.name).to.equal('AIR')
      }
    )
  })
})

