import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCartThunk} from '../reducers/CartReducer'
import CartItem from './CartItem'

class Cart extends Component {
  componentDidMount() {
    this.props.getCartThunk()
  }

  render() {
    const {cart} = this.props

    if (!cart.length) return <div>No items in your cart.</div>

    return (
      <div>
        <h5>You have ordered:</h5>
        <ul>
          {cart.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
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
  getCartThunk: () => dispatch(getCartThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
