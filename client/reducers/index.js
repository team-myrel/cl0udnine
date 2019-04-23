import {combineReducers} from 'redux'
import Products from './ProductsReducer'
import Users from './UserReducer'
import Cart from './CartReducer'
import Order from './OrderReducer'

const rootReducer = combineReducers({
  Products,
  Users,
  Cart,
  Order
})

export default rootReducer
