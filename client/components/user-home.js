import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const { firstName, id } = props
  return (
    <div id="container">
      <h3>Welcome back, {firstName}!</h3><br />
      <p>Thank you for shopping with Cloud9.</p><br /><br />
      <Link to={`/orders/${id}`}>
        Click here to see your previous order.
      </Link><br /><br />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.Users.email,
    firstName: state.Users.firstName,
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
