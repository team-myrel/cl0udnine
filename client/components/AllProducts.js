import React from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../reducers/ProductsReducer'
// import SingleProduct from './SingleProduct'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
    console.log('HERE', this.props)
  }

  render() {
    console.log('render', this.props)
    return (
      <div>
        <h2>Products</h2>
        <div>{this.props.products}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allProducts: state.allProducts
})

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
