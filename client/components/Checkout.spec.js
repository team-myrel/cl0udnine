import chai, {expect} from 'chai'
import React from 'react'
import enzyme, {shoallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Checkout from './Checkout'

chai.use(sinonChai);

Enzyme.configure({adapter: new EnzymeAdapter()});

describe('<Checkout>', () => {
  let checkout = [{
    
  }]
})
