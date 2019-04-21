import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Product from './Product'

const adapter = new Adapter()
enzyme.configure({ adapter })
const nycAir = {id: 1, name: 'NYC Air', description: 'When you miss the secondhand smoke, sidewalk pee, and perpetual garbage day', scent: 'Subway Chic', elevation: 0, quality: 'Could be better', price: 100, purpose: 'Productivity and Loss of Appetite', imageUrl: 'https://lh3.googleusercontent.com/GDkUTO5OsGce_APmYDByGo9uSaEk6kFjfaJNBuBhCOemLf8-sG1Zq71aAgNjChb3Am8', molecularComposition: 'CO2', stock: 15 }

xdescribe('Product', () => {
  let productComp

  beforeEach(() => {
    productComp = shallow(<Product  />)
  })

  it('renders the name in an h4', () => {
    productComp.setState({ product: nycAir })
    //console.log(product)
    expect(productComp.find('h4').text()).to.be.equal('NYC Air')
  })
})