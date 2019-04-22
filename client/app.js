import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
// import {Elements, StripeProvider} from 'react-stripe-elements'
// import CheckoutForm from './components/CheckoutForm'
// import Stripe from './components/Stripe'

const App = () => {
  return (
    <div id="app">
      <Navbar />
      {/* <div>
        <Stripe />
        <StripeProvider apiKey="sk_test_LPYtVdZCR1sLCh2HHFFxc31100Cc9B5tLq">
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
      </div> */}
      <Routes />
      <div id="footer"><br /><br />Proudly brought to you by Lisa, Lerena, Michaela, and Rashmi from GH-1902!</div>
    </div>
  )
}

export default App
