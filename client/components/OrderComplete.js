import React from 'react'
import {connect} from 'react-redux'

class OrderComplete extends React.Component {
  render() {
    return (
      <div id="container">
        <h1>Order Complete!</h1>
        <h4>Order ID #: {this.props.order.id}</h4>
        <h4>Your order is on its way!</h4>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  order: state.Order.order
})

export default connect(mapStateToProps)(OrderComplete)
