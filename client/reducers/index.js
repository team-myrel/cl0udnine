import {combineReducers} from 'redux'
import Products from './ProductsReducer'
import Users from './UserReducer'
import Cart from './CartReducer'

const rootReducer = combineReducers({
  Products,
  Users,
  Cart
})

export default rootReducer
