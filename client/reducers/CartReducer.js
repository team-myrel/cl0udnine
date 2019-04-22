import axios from 'axios'

// initial state
const initialState = {
  cart: []
}

// action types
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_ITEM = 'DELETE_ITEM'
const CHANGE_QUANTITY = 'CHANGE_QUANTITY'

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

const changeQuant = (id, data) => ({
  type: CHANGE_QUANTITY,
  id,
  data
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
      const {data} = await axios.put('/api/cart', product)
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

export const changeQuantThunk = (id, change) => {
  const bod = {
    change
  }

  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/cart/${id}`, bod)
      dispatch(changeQuant(id, data))
    } catch (err) {
      throw err
    }
  }
}

// reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cart.find(item => item.id === action.product.id)) {
        return state
      } else {
        return {...state, cart: [...state.cart, action.product]}
      }
    case GET_CART:
      return {...state, cart: action.data}
    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(current => current.id !== action.id)
      }
    case CHANGE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.id) {
            return action.data
          } else {
            return item
          }
        })
      }
    default:
      return state
  }
}

export default cartReducer
