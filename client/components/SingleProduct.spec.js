import {expect} from 'chai'
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleProduct} from './SingleProduct'


Enzyme.configure({ adapter: new Adapter() })

describe('Single Product', () => {
  describe('should render the product details', () => {
    let  SingleProductWrapper
    
    beforeEach('create <Singleproduct /> wrapper', () => {
      //  let product = { id: 1, name: 'NYC Air', description: 'When you miss the secondhand smoke, sidewalk pee, and perpetual garbage day', scent: 'Subway Chic', elevation: 0, quality: 'Could be better', price: 100, purpose: 'Productivity and Loss of Appetite', imageUrl: 'https://lh3.googleusercontent.com/GDkUTO5OsGce_APmYDByGo9uSaEk6kFjfaJNBuBhCOemLf8-sG1Zq71aAgNjChb3Am8', molecularComposition: 'CO2', stock: 15 }
      
      SingleProductWrapper = shallow(<SingleProduct name ="NYC AIR"/>)
    })
    it('renders the product name in an h3', () => {
      expect(SingleProductWrapper.find('h3').text()).to.be.equal('NYC Air')
    })
  })
})