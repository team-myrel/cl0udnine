import React from 'react'
import {Link} from 'react-router-dom'

const CartItem = props => {
  const product = props.cartItem.product
  const quantity = props.cartItem.quantity
  const cartItem = props.cartItem

  if (!product) return <div>Loading Item...</div>

  return (
    <div id="cartItemDiv">
      <div>
        <Link to={`products/${product.id}`}>
          <img src={product.imgUrl} />
        </Link>
      </div>
      <div>
        <p>
          <Link to={`products/${product.id}`}>{product.name}</Link>
        </p>
        <p>Price: {cartItem.totalCost}</p>
        <p>Quantity: {quantity}</p>
        <button
          type="button"
          onClick={() => {
            props.removeItem(cartItem.id)
          }}
        >
          Delete From Cart
        </button>
      </div>
    </div>
  )
}

export default CartItem
