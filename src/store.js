/* eslint-disable */
import { createStore, combineReducers } from 'redux'
import sidebarReducer from './redux/sidebarReducer'
import userReducer from './redux/userReducer'

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  user: userReducer
})

const store = createStore(rootReducer)
export default store
