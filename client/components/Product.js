import React from 'react'
import {Link} from 'react-router-dom'
import Confirm from './Confirm'

class Product extends React.Component {
  state = {select: 'open'}
  // handleSubmit = alert('Submitted')

  handleStatusChange = event => {
    this.setState({select: event.target.value})
  }

  render() {
    const product = this.props.product
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
        <Confirm title="Added to Cart" description="Good Choice!">
          {confirm => (
            <form onSubmit={confirm(this.handleSubmit)}>
              <label>
                Status:
                <select
                  value={this.state.select}
                  onChange={confirm(this.handleStatusChange)}
                >
                  <option value="open">Open</option>
                  <option value="close">Close</option>
                </select>
              </label>
              <button
                type="button"
                className="addBtn"
                onClick={() => {
                  this.props.addToCart(product)
                  confirm(this.handleStatusChange)
                }}
                onChange={confirm(this.handleStatusChange)}
              >
                Add to Cart
              </button>
            </form>
          )}
        </Confirm>
        <br />
        <br />
        <hr />
      </div>
    )
  }
}

export default Product
