import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../reducers/UserReducer'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Cloud Nine</h1>
    <nav>
      {!isLoggedIn ? (
        <div>
          <h1>I'm Logged In!!!!</h1>
          {/* The navbar will show these links after you log in */}
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart">
            <img src="https://image.flaticon.com/icons/svg/2/2772.svg" />
          </Link>
          {/*based on CSS, change the word 'Cart' to a cart icon*/}
        </div>
      ) : (
        <div>
          <h1>I'm Logged OUT!!!!</h1>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">
            <img src="https://image.flaticon.com/icons/svg/2/2772.svg" />
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.Users.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
