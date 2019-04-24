import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, Checkout} from './components'
import {me} from './reducers/UserReducer'
import AllProducts from './components/AllProducts'
import SingleProduct from './components/SingleProduct'
import Splash from './components/Splash'
import Cart from './components/Cart'
import Page404 from './components/Page404'
import {getAllProducts} from './reducers/ProductsReducer'
import OrderComplete from './components/OrderComplete'
// import { Page404 } from './components/Page404'
import UserHome from './components/UserHome'
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.loadProducts()
  }

  render() {
    const {isLoggedIn} = this.props
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Splash} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/orderComplete" component={OrderComplete} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/home" component={UserHome} />
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route exact path="/:userId/cart" component={Cart} />
            <Route exact path="/:userId/checkout" component={Checkout} />
            <Route exact path="/orderComplete" component={OrderComplete} />
          </Switch>
        )}
        <Route component={Page404} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.Users.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    loadProducts() {
      dispatch(getAllProducts())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
