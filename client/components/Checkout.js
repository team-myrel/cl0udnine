import React, {Component} from 'react'
import {getCartThunk} from '../reducers/CartReducer'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import Stripe from './Stripe'
import {createOrderThunk} from '../reducers/OrderReducer'

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
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.checkoutComplete = this.checkoutComplete.bind(this)
  }

  componentDidMount() {
    this.props.getCartThunk(this.props.user)
  }

  // componentDidUpdate(prevProps) {
  //   console.log('prevProps', prevProps)
  //   console.log('this.props.order', this.props.order)

  //   if (this.props.order !== prevProps.order) {
  //     this.checkoutComplete()
  //   }
  // }

  checkoutComplete() {
    return <div>Order Complete! Order #: {this.props.order}</div>
  }

  render() {
    const {cart} = this.props

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
        <button
          type="button"
          onClick={() => this.props.createOrderThunk(this.props.user)}
        >
          Place Order
        </button>
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
