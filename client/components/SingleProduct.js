import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProduct} from '../reducers/ProductsReducer'
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
    return <div>
          <img src={product.imgUrl} />
        <h3>Name: {product.name} </h3>
        <p> Description: {product.description} </p>
        <p>Scent: {product.scent} </p>
        <p>Elevation: {product.elevation} </p>
        <h5>Quality: {product.quality} </h5>
        <h3>Price Per Unit: {product.price} </h3>
        <p>Benefits: {product.benefits} </p>
        <p>Molecular Composition: {product.molecularComposition} </p>
        <div>
          <button type="button" onClick={() => {
              this.handleClick(product)
            }}>
            Add to Cart
          </button>
        </div>
      </div>
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
