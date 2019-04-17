import React from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../reducers/ProductsReducer'
import Product from './Product'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    const {loading} = this.props

    if (loading) return <div>Putting on Airs...</div>

    return (
      <div>
        <h2>Products</h2>
        <ul>
          {this.props.allProducts.map(product => (
            <Product product={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allProducts: state.Products.allProducts
})

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
