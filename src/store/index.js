import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import {
    AuthSaga,
    UserSaga,
    NewsSaga
} from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
    sagaMiddleware
]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(AuthSaga)
sagaMiddleware.run(UserSaga)
sagaMiddleware.run(NewsSaga)

export default store