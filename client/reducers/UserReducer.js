import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_USER = 'ADD_USER'
const GET_ALL_USERS = 'GET_ALL_USERS'

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = user => ({type: REMOVE_USER, user})
const addUser = newUser => ({
  type: ADD_USER,
  newUser
})
const getAllUsers = users => ({type: GET_ALL_USERS, users})

/**
 * INITIAL STATE
 */
const defaultUser = {
  user: {},
  users: []
}

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const login = (email, password) => async dispatch => {
  let user
  try {
    user = await axios.post('/auth/login', {email, password})
  } catch (err) {
    console.error(err)
    return dispatch(getUser({error: err}))
  }

  try {
    dispatch(getUser(user.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const gettingAllUsers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    return dispatch(getAllUsers(data))
  } catch (err) {
    console.error(err)
  }
}

export const addingUser = newUser => async dispatch => {
  try {
    const {data} = await axios.post('/auth/signup', newUser)
    dispatch(addUser(data))
  } catch (err) {
    console.error(err)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state, users: action.users}
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return state
    case ADD_USER:
      return {...state, users: [...state.users, action.newUser]}
    default:
      return state
  }
}
