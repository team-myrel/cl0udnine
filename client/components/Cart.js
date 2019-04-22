import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCartThunk, deleteItemThunk } from '../reducers/CartReducer'
import CartItem from './CartItem'

class Cart extends Component {
  constructor() {
    super()
    this.removeItem = this.removeItem.bind(this)
  }

  componentDidMount() {
    this.props.getCartThunk()
  }

  removeItem = product => {
    this.props.deleteItemThunk(product)
  }

  render() {
    const { cart } = this.props

    if (!cart.length) return <div id="container"><h1>Your Cart<br /></h1>No items in your cart.</div>

    return (
      <div id="container">
        <h1>Your Cart</h1><br />
        <h5>You have ordered:</h5>
        <ul>
          {cart.map(cartItem => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              removeItem={this.removeItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.Cart.cart
})

const mapDispatchToProps = dispatch => ({
  getCartThunk: () => dispatch(getCartThunk()),
  deleteItemThunk: id => dispatch(deleteItemThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
