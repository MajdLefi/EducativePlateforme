import {combineReducers} from 'redux'
import authReducer from './authReducer'
import bootcampsReducer from './bootcampsReducer';
import usersReducer from './usersReducer'

const combineReducer = combineReducers({
  authReducer,
  bootcampsReducer,
  usersReducer
 })

 export default combineReducer