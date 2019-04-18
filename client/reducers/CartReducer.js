import axios from 'axios'

// initial state
const initialState = {
  cart: []
}

// action types
const ADD_TO_CART = 'ADD_TO_CART'

// action creators
const addToCart = product => ({
  type: ADD_TO_CART,
  product
})

// thunk
export const addToCartThunk = product => {
  console.log('hitting thunk?')
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products/${product.id}`)
      dispatch(addToCart(data))
    } catch (err) {
      throw err
    }
  }
}

// reducer
const cartReducer = (state = initialState, action) => {
  console.log('action', action)
  console.log('state', state)

  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cart: [...state.cart, action.product]}
    default:
      return state
  }
}

export default cartReducer
