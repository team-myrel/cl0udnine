import React from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from '../reducers/ProductsReducer'
import Product from './Product'
import { addToCartThunk } from '../reducers/CartReducer'


export class AllProducts extends React.Component {
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    this.props.getAllProducts()
  }

  addToCart = product => {
    this.props.addToCartThunk(product, this.props.user)
  }

  render() {
    const { loading } = this.props

    if (loading) return <div>Putting on Airs...</div>
    const allProducts = this.props.allProducts
    return (
      <div id="main">
        <div id="container">
          <heading>Products</heading>
          {allProducts.map(product => (
            <Product
              product={product}
              key={product.id}
              addToCart={this.addToCart}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allProducts: state.Products.allProducts,
  user: state.Users.id
})

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
  addToCartThunk: (product, user) => dispatch(addToCartThunk(product, user))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
