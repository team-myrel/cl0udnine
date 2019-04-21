/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserHome} from './user-home'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserHome', () => {
  let userHome

  beforeEach(() => {
    userHome = shallow(<UserHome firstName="cody" />)
  })

  it('renders the First Name in an h3', () => {
    expect(userHome.find('h3').text()).to.be.equal('Welcome back, cody!')
  })
})
