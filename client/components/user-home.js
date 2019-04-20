import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, id} = props
  return (
    <div>
      <h3>Welcome back, {firstName}!</h3>
      <Link to={`/orders/${id}`}>
      Here's what you ordered!
      </Link>
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
