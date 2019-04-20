import React from 'react'
import {Link} from 'react-router-dom'

const CartItem = props => {
  const product = props.cartItem.product
  const quantity = props.cartItem.quantity

  if (!product) return <div>Loading Item...</div>

  return (
    <div>
      <div>
        <Link to={`products/${product.id}`}>
          <img src={product.imgUrl} />
        </Link>
      </div>
      <div>
        <p>
          <Link to={`products/${product.id}`}>{product.name}</Link>
        </p>
        <p>{product.price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  )
}

export default CartItem
