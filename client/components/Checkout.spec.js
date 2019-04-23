import chai, {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Checkout from './Checkout'

chai.use(sinonChai)

Enzyme.configure({adapter: new EnzymeAdapter()})

describe('<Checkout>', () => {
  let checkout = [{item: 'OceanAir', price: 100}]

  let checkoutWrapper = shallow(<Checkout checkout={checkout} total="100" />)
  it('has a <h3> that renders props.total', () => {
    expect(checkoutWrapper.find('h3').text()).to.be.equal('100')
  })
})
