import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../reducers/UserReducer'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name} className="formStyle">
        {name === 'signup' && (
          <div>
            <div>
              <label htmlFor="firstName" className="label">
                <small>First Name</small>
              </label>
              <input name="firstName" type="text" className="input" />
            </div>
            <div>
              <label htmlFor="lastName" className="label">
                <small>Last Name</small>
              </label>
              <input name="lastName" type="text" className="input" />
            </div>
            {/* <div>
              <label htmlFor="address" className="label">
                <small>Address</small>
              </label>
              <input name="address" type="text" className="input" />
            </div>
            <div>
              <label htmlFor="city" className="label">
                <small>City</small>
              </label>
              <input name="city" type="text" className="input" />
            </div>
            <div>
              <label htmlFor="state" className="label">
                <small>State</small>
              </label>
              <input name="state" type="text" className="input" />
            </div>
            <div>
              <label htmlFor="country" className="label">
                <small>Country</small>
              </label>
              <input name="country" type="text" className="input" />
            </div> */}
            {/* <div>
              <label htmlFor="zipCode" className="label">
                <small>Zip Code</small>
              </label>
              <input name="zipCode" type="text" className="input" />
            </div> */}
          </div>
        )}
        <div>
          <label htmlFor="email" className="label">
            <small>Email</small>
          </label>
          <input name="email" type="text" className="input" />
        </div>
        <div>
          <label htmlFor="password" className="label">
            <small>Password</small>
          </label>
          <input name="password" type="password" className="input" />
        </div>
        <div>
          <button className="sendBtn" type="submit">
            {displayName}
          </button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
        <a href="/auth/google">{displayName} with Google</a>
      </form>
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
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.Users.user
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.Users.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      const firstName = evt.target.firstName ? evt.target.firstName.value : null
      const lastName = evt.target.lastName ? evt.target.lastName.value : null
      const address = evt.target.address ? evt.target.address.value : null
      const city = evt.target.city ? evt.target.city.value : null
      const state = evt.target.state ? evt.target.state.value : null
      const country = evt.target.country ? evt.target.country.value : null
      const zipCode = evt.target.zipCode ? evt.target.zipCode.value : null
      dispatch(
        auth(
          email,
          password,
          firstName,
          lastName,
          address,
          city,
          state,
          country,
          zipCode,
          formName
        )
      )
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
