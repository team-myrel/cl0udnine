import axios from 'axios'

// initial state
const initialState = {
  cart: []
}

// action types
const ADD_TO_CART = 'ADD_TO_CART'

// action creators
const addToCart = id => ({
  type: ADD_TO_CART,
  id
})

// thunk

// reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state}
    default:
      return state
  }
}

export default cartReducer
