import axios from 'axios'

// initial state
const initialState = {
  cart: []
}

// action types
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'

// action creators
const getCartAction = data => ({
  type: GET_CART,
  data
})

const addToCart = product => ({
  type: ADD_TO_CART,
  product
})

// thunk
export const getCartThunk = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/cart')
    dispatch(getCartAction(data))
  }
}

export const addToCartThunk = product => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/cart', product)
      dispatch(addToCart(data))
    } catch (err) {
      throw err
    }
  }
}

// reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cart: [...state.cart, action.product]}
    case GET_CART:
      return {...state, cart: action.data}
    default:
      return state
  }
}

export default cartReducer
