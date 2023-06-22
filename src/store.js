/* eslint-disable */
import { createStore, combineReducers,applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import sidebarReducer from './redux/sidebarReducer'
import userReducer from './redux/userReducer'

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  user: userReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))
export default store
