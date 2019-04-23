import React from 'react'
import {Link} from 'react-router-dom'
import {Popover, OverlayTrigger} from 'react-bootstrap'

class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const product = this.props.product
    const popover = (
      <Popover id="popover-basic" title="Added To Cart">
        Keep breathing, Great Choice!
      </Popover>
    )
    return (
      <div>
        <br />
        <div id="productlink">
          <Link to={`products/${product.id}`}>{product.name}</Link>
        </div>
        <br />
        <Link to={`products/${product.id}`}>
          <img src={product.imgUrl} />
        </Link>
        <br />
        <h1>Price: ${product.price}</h1>
        <OverlayTrigger trigger="click" placement="auto" overlay={popover}>
          <button
            type="button"
            className="addBtn"
            onClick={() => {
              this.props.addToCart(product)
            }}
          >
            Add to Cart
          </button>
        </OverlayTrigger>
        <br />
        <br />
        <hr />
      </div>
    )
  }
}

export default Product
