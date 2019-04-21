import {expect} from 'chai'
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Product from './Product'
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter()})

describe('Product', () => {
  describe('should render the product props it reeives', () => {
    let productProp
    let ProductWrapper

    beforeEach('create <Product /> wrapper', () => {
      productProp = { id: 1, name: 'NYC Air', description: 'When you miss the secondhand smoke, sidewalk pee, and perpetual garbage day', scent: 'Subway Chic', elevation: 0, quality: 'Could be better', price: 100, purpose: 'Productivity and Loss of Appetite', imageUrl: 'https://lh3.googleusercontent.com/GDkUTO5OsGce_APmYDByGo9uSaEk6kFjfaJNBuBhCOemLf8-sG1Zq71aAgNjChb3Am8', molecularComposition: 'CO2', stock: 15 }
      
      ProductWrapper = shallow(<Product product={productProp} />)
    })
    it('includes the product name in h4', () => {
      expect(ProductWrapper.find('h4').text()).to.be.equal('<Link />')
      //need to find out how to check for the text inside link
      //expect(ProductWrapper.find('h4').text().).to.be.equal('<Link />')
    })
    it('includes the product price in h6', () => {
      expect(ProductWrapper.find('h6').text()).to.be.equal('100')
      
    })
  })
})

// const nycAir = {id: 1, name: 'NYC Air', description: 'When you miss the secondhand smoke, sidewalk pee, and perpetual garbage day', scent: 'Subway Chic', elevation: 0, quality: 'Could be better', price: 100, purpose: 'Productivity and Loss of Appetite', imageUrl: 'https://lh3.googleusercontent.com/GDkUTO5OsGce_APmYDByGo9uSaEk6kFjfaJNBuBhCOemLf8-sG1Zq71aAgNjChb3Am8', molecularComposition: 'CO2', stock: 15 }

// xdescribe('Product', () => {
//   let productComp

//   beforeEach(() => {
//     productComp = shallow(<Product  />)
//   })

//   it('renders the name in an h4', () => {
//     productComp.setState({ product: nycAir })
//     //console.log(product)
//     expect(productComp.find('h4').text()).to.be.equal('NYC Air')
//   })
// })