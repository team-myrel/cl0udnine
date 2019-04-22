import React, {Component} from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class Checkout extends Component {
  render() {
    return (
      <h1>Let's Review your order!</h1>
      // <StripeProvider apiKey="sk_test_LPYtVdZCR1sLCh2HHFFxc31100Cc9B5tLq">
      //   <div className="example">
      //     <h1>React Stripe Elements Example</h1>
      //     <Elements>
      //       <CheckoutForm />
      //     </Elements>
      //   </div>
      // </StripeProvider>
    )
  }
}

export default Checkout
