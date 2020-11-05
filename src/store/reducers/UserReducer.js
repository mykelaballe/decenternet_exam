import Actions from '../actions'
import Immutable from 'seamless-immutable'
import {createReducer} from 'reduxsauce'

const INITIAL_STATE = Immutable({
    attemptingRegister: false,
    registeredUsers: [],
    loggedInUser: null
})

const doAttemptRegister = state => state.merge({attemptingRegister: true})

const doRegisterUser = (state, {payload}) => (
    state.merge({
        registeredUsers: [
            ...state.registeredUsers,
            payload
        ]
    })
)

const doDoneRegister = state => state.merge({attemptingRegister: false})

const doSetLoggedInUser = (state, {payload}) => state.merge({loggedInUser: payload})

const HANDLERS = {
    [Actions.Types.ATTEMPT_REGISTER]: doAttemptRegister,
    [Actions.Types.REGISTER_USER]: doRegisterUser,
    [Actions.Types.DONE_REGISTER]: doDoneRegister,
    [Actions.Types.SET_LOGGED_IN_USER]: doSetLoggedInUser
}

export default createReducer(INITIAL_STATE, HANDLERS)