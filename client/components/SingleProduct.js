import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProduct} from '../reducers/ProductsReducer'

export class SingleProduct extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getProduct()
  }
  render() {
    const product =  this.props.selectedProduct
    return (
      <div> Hello from singleComponent
        <img src={product.imgUrl} />
        <h3>Name: {product.name} </h3>
        <h4> Description: {product.description} </h4>
        <h4>Scent: {product.scent} </h4>
        <h4>Elevation: {product.elevation} </h4>
        <h5>Quality: {product.quality} </h5>
        <h3>Price Per Unit: {product.price} </h3>
        <h5>Benefits: {product.benefits} </h5>
        <h6>Molecular Composition: {product.molecularComposition} </h6>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    selectedProduct:state.Products.selectedProduct
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const productId = Number(ownProps.match.params.id)
  return {
    getProduct: () => dispatch(getProduct(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)