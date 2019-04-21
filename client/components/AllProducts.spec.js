import {expect} from 'chai'
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import  AllProducts from './AllProducts'
import Product from './Product'

const adapter = new Adapter()
Enzyme.configure({ adapter })

const productList = [
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'Fresh',
    description:
      'When you miss the fresh smell of clean ',
    scent: 'Fresh cut grass',
    elevation: 0,
    quality: 'best',
    price: 100,
    purpose: 'Productivity and Loss of Appetite',
    imageUrl:
      'https://lh3.googleusercontent.com/GDkUTO5OsGce_APmYDByGo9uSaEk6kFjfaJNBuBhCOemLf8-sG1Zq71aAgNjChb3Am8',
    molecularComposition: 'CO2, O2',
    stock: 15
  },
  {
    id: 3,
    name: 'Sea Air',
    description:
      'When you miss the seaside',
    scent: 'Salty',
    elevation: 0,
    quality: 'nice',
    price: 100,
    purpose: 'makes you lethargic',
    imageUrl:
      'https://lh3.googleusercontent.com/GDkUTO5OsGce_APmYDByGo9uSaEk6kFjfaJNBuBhCOemLf8-sG1Zq71aAgNjChb3Am8',
    molecularComposition: 'CO2',
    stock: 15
  }
]

//Need some help with understanding this testing
xdescribe('AllProducts Component', () => {
  let allProductsWrapper

  beforeEach(() => {
    allProductsWrapper = shallow(<AllProducts />)
    if (allProductsWrapper.instance().componentDidMount) {
      allProductsWrapper.instance().componentDidMount()
    }
  })

  it('renders the <Product /> component based on the state', () => {
    allProductsWrapper.setState({ allproducts: productList })
    expect(allProductsWrapper.find(Product)).to.have.length(3)
    
    const secondProduct = allProductsWrapper.find(Product).at(1)
    // eslint-disable-next-line no-unused-expressions
    expect(secondProduct.equals(<Product product={productList[1]} />)).to.be.true
  })
})