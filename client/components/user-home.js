import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Splash from './Splash'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  return (
    <div id="container">
      <h3>Welcome back, {email}!</h3>
      <Splash />
      <p>Thank you for shopping with Cloud9.</p>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.Users.email,
    user: state.Users,
    id: state.Users.id
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
