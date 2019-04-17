import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addingUser} from '../reducers/UserReducer'

class SignupForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      city: '',
      state: '',
      country: '',
      zipcode: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addingUser(this.state)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      city: '',
      state: '',
      country: '',
      zipcode: 0
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Zipcode:
            <input
              type="text"
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addingUser
}

export default connect(null, mapDispatchToProps)(SignupForm)
// export default SignupForm
