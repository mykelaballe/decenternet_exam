import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import NewsReducer from './NewsReducer'

export default combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    news: NewsReducer
})