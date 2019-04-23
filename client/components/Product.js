import React from 'react'
import { Link } from 'react-router-dom'

const Product = props => {
  const product = props.product

  return (
    <div>
      <br />

      <div id="productlink"><Link to={`products/${product.id}`}>{product.name}</Link></div><br />
      <Link to={`products/${product.id}`}>
        <img src={product.imgUrl} />
      </Link>
      <div>
        <br />


        <h1>Price: ${product.price}</h1>
        <button
          type="button" className="addBtn"
          onClick={() => {
            props.addToCart(product)
          }}>add to cart!!!!!!!!!!</button>

      </div>
      <br /><br /><hr />
    </div>

  )
}

export default Product
