import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const signup = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="firstName" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="lastName" type="text" />
        </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <label htmlFor="address">
            <small>Address</small>
          </label>
          <input name="address" type="text" />
        </div>
        <div>
          <label htmlFor="city">
            <small>City</small>
          </label>
          <input name="city" type="text" />
        </div>
        <div>
          <label htmlFor="state">
            <small>State</small>
          </label>
          <input name="state" type="text" />
        </div>
        <div>
          <label htmlFor="country">
            <small>Country</small>
          </label>
          <input name="country" type="text" />
        </div>
        <div>
          <label htmlFor="zip">
            <small>Zip Code</small>
          </label>
          <input name="zipcode" type="text" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.Users
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const address = evt.target.address.value
      const city = evt.target.city.value
      const state = evt.target.state.value
      const country = evt.target.country.value
      const zipcode = evt.target.zipcode.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(
        auth(
          email,
          password,
          formName,
          firstName,
          lastName,
          address,
          city,
          state,
          country,
          zipcode
        )
      )
    }
  }
}

export const Signup = connect(mapSignup, mapDispatch)(signup)

/**
 * PROP TYPES
 */
signup.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
