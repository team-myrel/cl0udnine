import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../reducers/UserReducer'

<<<<<<< HEAD
const Navbar = ({ handleClick, isLoggedIn }) => (
  <div id="nav">
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link> |
          <Link to="/products">Products</Link> |
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/cart">
            <img src="https://image.flaticon.com/icons/svg/2/2772.svg" />
          </Link>
        </div>
      ) : (
=======
const Navbar = ({handleClick, isLoggedIn, userId}) => {
  return (
    <div id="nav">
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to={`/${userId}/cart`}>
              <img src="https://image.flaticon.com/icons/svg/2/2772.svg" />
            </Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
>>>>>>> 4fbc54f05c17e54dd956ec41db6426331d478338
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/products">Products</Link> |
            <Link to="/login">Login</Link> |
            <Link to="/signup">Sign Up</Link> |
            <Link to="/cart">
              <img src="https://image.flaticon.com/icons/svg/2/2772.svg" />
            </Link>
          </div>
        )}
      </nav>
      <div id="container">
        <div className="title">Welcome to Cloud 9</div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.Users.id,
    userId: state.Users.id
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
