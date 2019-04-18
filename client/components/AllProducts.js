import React from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../reducers/ProductsReducer'
import Product from './Product'
import addToCart from '../reducers/CartReducer'

class AllProducts extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getAllProducts()
  }

  handleClick = id => {
    this.props.addToCart(id)
  }

  render() {
    const {loading} = this.props

    if (loading) return <div>Putting on Airs...</div>

    return (
      <div>
        <h2>Products</h2>
        <ul>
          {this.props.allProducts.map(product => (
            <Product
              product={product}
              key={product.id}
              handleClick={this.handleClick}
            />
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
  getAllProducts: () => dispatch(getAllProducts()),
  addToCart: id => dispatch(addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
