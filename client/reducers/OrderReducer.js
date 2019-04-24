import axios from 'axios'

// initial state
const initialState = {
  order: []
}

// action types
const CREATE_ORDER = 'CREATE_ORDER'

// action creators
const createOrderAction = order => ({
  type: CREATE_ORDER,
  order
})

// thunk
export const createOrderThunk = userId => {
  if (userId) {
    return async dispatch => {
      const req = await axios.put(`/api/users/${userId}/checkout`)
      const orderObj = req.data
      dispatch(createOrderAction(orderObj))
    }
  } else {
    return async dispatch => {
      const req = await axios.put('/api/checkout')
      const orderObj = req.data
      dispatch(createOrderAction(orderObj))
    }
  }
}

// reducer
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {...state, order: action.order.order}
    default:
      return state
  }
}

export default orderReducer
