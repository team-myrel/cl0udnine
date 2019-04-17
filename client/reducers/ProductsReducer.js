import axios from 'axios'

//Initial State
const initialState = {
  selectedProduct:{}
}
//action types
const SELECTED_PRODUCT = 'SELECTED_PRODUCT'

//action creators
const gotSingleProduct = (product) => (
  {
    type: SELECTED_PRODUCT,
    product
  }
)

//Thunk 
export const getProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`api/products/${id}`)
      dispatch(gotSingleProduct(data))
    }
    catch (err) {
      throw err
    }
  }
}

//Reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.product }
    default:
      return state
  }
}

export default productReducer