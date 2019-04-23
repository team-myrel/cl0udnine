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
        stripeKey="pk_test_rj9Rxn5NnQAQDFQncPXCyMHB00kom9TRhL"
        amount={charge}
      />
    )
  }
}
