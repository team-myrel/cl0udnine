import React from 'react'
import {Link} from 'react-router-dom'

const Product = props => {
  const product = props.product

  return (
    <div>
      <img src={product.imgUrl} />
      <div>
        <h4>
          <Link to={`products/${product.id}`}>{product.name}</Link>
        </h4>
        <button
          type="button"
          onClick={() => {
            props.handleClick(product.id)
          }}
        >
          Add
        </button>
      </div>
      <h6>{product.price}</h6>
    </div>
  )
}

export default Product
