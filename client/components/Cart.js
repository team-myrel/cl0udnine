import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getCartThunk,
  deleteItemThunk,
  changeQuantThunk
} from '../reducers/CartReducer'
import CartItem from './CartItem'

class Cart extends Component {
  constructor() {
    super()
    this.removeItem = this.removeItem.bind(this)
    this.changeQuant = this.changeQuant.bind(this)
  }

  componentDidMount() {
    this.props.getCartThunk(this.props.user)
  }

  removeItem = product => {
    this.props.deleteItemThunk(product, this.props.user)
  }

  changeQuant = (itemId, change) => {
    this.props.changeQuantThunk(itemId, change, this.props.user)
  }

  render() {
    const {cart, user} = this.props
    const cartSerialized = JSON.stringify(cart)
    const cartDeserialized = JSON.parse(localStorage.getItem('cart'))
    localStorage.setItem('cart', cartSerialized)

    if (!cart.length)
      return (
        <div id="container">
          <h1>
            Your Cart<br />
          </h1>No items in your cart.
        </div>
      )

    return (
      <div id="container">
        <h1>Your Cart</h1>
        <br />
        <h5>You have ordered:</h5>
        <ul>
          {cart.map(cartItem => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              removeItem={this.removeItem}
              changeQuant={this.changeQuant}
              getCartThunk={this.props.getCartThunk}
              user={user}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.Cart.cart,
  user: state.Users.id
})

const mapDispatchToProps = dispatch => ({
  getCartThunk: user => dispatch(getCartThunk(user)),
  deleteItemThunk: (itemId, user) => dispatch(deleteItemThunk(itemId, user)),
  changeQuantThunk: (itemId, change, user) =>
    dispatch(changeQuantThunk(itemId, change, user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
