import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../reducers/ProductsReducer'
import { addToCartThunk } from '../reducers/CartReducer'

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getProduct()
  }

  handleClick = product => {
    this.props.addToCartThunk(product)
  }

  render() {
    const product = this.props.selectedProduct
    return <div id="container">
      <img src={product.imgUrl} />
      <h3> {product.name} </h3><hr />
      <p> <b>Description:</b> {product.description} </p><hr />
      <p><b>Scent:</b> {product.scent} </p><hr />
      <p><b>Elevation:</b> {product.elevation} meters</p><hr />
      <p><b>Quality:</b> {product.quality} </p><hr />
      <p><b>Benefits:</b> {product.benefits} </p><hr />
      <p><b>Molecular Composition:</b> {product.molecularComposition} </p><hr />
      <h1>Price Per Unit: ${product.price} </h1>
      <div>
        <button type="button" className="addBtn" onClick={() => {
          this.handleClick(product)
        }}>
          Add to Cart
          </button>

      </div>
      <br />
    </div >
  }
}
const mapStateToProps = state => {
  return {
    selectedProduct: state.Products.selectedProduct
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const productId = Number(ownProps.match.params.id)
  return {
    getProduct: () => dispatch(getProduct(productId)),
    addToCartThunk: product => dispatch(addToCartThunk(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
