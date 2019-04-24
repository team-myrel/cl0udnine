import React, { Component } from 'react'
import { getCartThunk } from '../reducers/CartReducer'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import Stripe from './Stripe'
import { createOrderThunk } from '../reducers/OrderReducer'
import { Link } from 'react-router-dom'

class Checkout extends Component {
  constructor() {
    super()
    this.placeOrder = this.placeOrder.bind(this)
  }

  componentDidMount() {
    this.props.getCartThunk(this.props.user)
  }

  placeOrder() {
    this.props.createOrderThunk(this.props.user)
  }

  render() {
    const { cart } = this.props

    return (
      <div id="container">
        <h1>Checkout</h1>
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
        <h3>
          Subtotal: ${this.props.cart.reduce((acc, curr) => {
            return (acc += curr.quantity * curr.pricePerItem)
          }, 0)}
        </h3>
        <Link
          to="/orderComplete"
          type="button"
          onClick={() => this.placeOrder()}
        >
          Place Order
        </Link>
        <Stripe amount={this.props.subtotal} onSubmit={this.handleSubmit} />
        <br />
        <br />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.Cart.cart,
  user: state.Users.id,
  order: state.Order.order[0]
})

const mapDispatchToProps = dispatch => ({
  getCartThunk: user => dispatch(getCartThunk(user)),
  createOrderThunk: user => dispatch(createOrderThunk(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
