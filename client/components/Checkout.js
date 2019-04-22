import React, {Component} from 'react'
import {getCartThunk} from '../reducers/CartReducer'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import Stripe from './Stripe'

class Checkout extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      name: '',
      street: '',
      town: '',
      zip: '',
      state: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getCartThunk()
  }
  render() {
    const {cart} = this.props
    return (
      <div>
        <h1>Let's Review your order!</h1>
        <ul>
          {cart.map(cartItem => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              removeItem={this.removeItem}
              changeQuant={this.changeQuant}
              getCartThunk={this.props.getCartThunk}
            />
          ))}
        </ul>
        <h3>Subtotal: ${this.props.subtotal}</h3>
        <Stripe amount={this.props.subtotal} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.Cart.cart
})

const mapDispatchToProps = dispatch => ({
  getCartThunk: () => dispatch(getCartThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
