import axios from 'axios'

// initial state
const initialState = {
  cart: []
}

// action types
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_ITEM = 'DELETE_ITEM'

// action creators
const getCartAction = data => ({
  type: GET_CART,
  data
})

const addToCart = product => ({
  type: ADD_TO_CART,
  product
})

const deleteItem = id => ({
  type: DELETE_ITEM,
  id
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

export const deleteItemThunk = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/cart/${id}`)
      dispatch(deleteItem(id))
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
    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(current => current.id !== action.id)
      }
    default:
      return state
  }
}

export default cartReducer
