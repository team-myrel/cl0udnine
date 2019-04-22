import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default class Stripe extends React.Component {
  onToken = token => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token)
    })
    this.props.onSubmit(event)
  }

  render() {
    const {amount} = this.props
    const charge = Number(amount * 100)
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="sk_test_LPYtVdZCR1sLCh2HHFFxc31100Cc9B5tLq"
        amount={charge}
      />
    )
  }
}
