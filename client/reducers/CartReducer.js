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
// const CLEAR_CART = 'CLEAR_CART'

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

// const clearCart = () => ({
//   type: CLEAR_CART
// })

// thunk
export const getCartThunk = userId => {
  if (userId) {
    return async dispatch => {
      const {data} = await axios.get(`/api/users/${userId}/cart`)
      dispatch(getCartAction(data))
    }
  } else {
    return async dispatch => {
      const {data} = await axios.get('/api/cart')
      dispatch(getCartAction(data))
    }
  }
}

export const addToCartThunk = (product, userId) => {
  if (userId) {
    return async dispatch => {
      const {data} = await axios.put(`/api/users/${userId}/cart`, product)
      dispatch(getCartAction(data))
    }
  } else {
    return async dispatch => {
      const {data} = await axios.put('/api/cart', product)
      dispatch(addToCart(data))
    }
  }
}

export const deleteItemThunk = (itemId, userId) => {
  if (userId) {
    return async dispatch => {
      await axios.delete(`/api/users/${userId}/cart/${itemId}`)
      dispatch(deleteItem(itemId))
    }
  } else {
    return async dispatch => {
      await axios.delete(`/api/cart/${itemId}`)
      dispatch(deleteItem(itemId))
    }
  }
}

export const changeQuantThunk = (itemId, change, userId) => {
  const bod = {
    change
  }

  if (userId) {
    return async dispatch => {
      const {data} = await axios.put(`/api/users/${userId}/cart/${itemId}`, bod)
      dispatch(changeQuant(itemId, data))
    }
  } else {
    return async dispatch => {
      const {data} = await axios.put(`/api/cart/${itemId}`, bod)
      dispatch(changeQuant(itemId, data))
    }
  }
}

// export const clearCartThunk = (userId) => {
//   if (userId) {

//   }
// }

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
