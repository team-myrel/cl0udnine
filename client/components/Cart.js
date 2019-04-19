import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Cart extends Component {
  render() {
    let addedItems = this.props.cart.length ? (
      this.props.cart.map(product => {
        return (
          <div key={product.id}>
            <div>
              <img src={product.imgUrl} />
            </div>
            <div>
              <p>{product.name}</p>
              <p>{product.price}</p>
              {/*quantity of this specific item in the cart*/}
            </div>
          </div>
        )
      })
    ) : (
      <p>Nothing.</p>
    )
    return (
      <div>
        <h5>You have ordered:</h5>
        <ul>{addedItems}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.Cart.cart
})

export default connect(mapStateToProps)(Cart)
