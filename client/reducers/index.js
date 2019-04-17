import { combineReducers } from 'redux'
import Products from './ProductsReducer'
import Users from './UserReducer'

const rootReducer = combineReducers({
  Products,
  Users
})

export default rootReducer
