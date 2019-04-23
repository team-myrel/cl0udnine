import React from 'react'

export const OrderComplete = props => {
  return (
    <div>
      <h4>Order Complete!</h4>
      <h6>Order ID #: {props.order.id}</h6>
    </div>
  )
}
