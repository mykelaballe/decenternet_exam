import Actions from '../actions'
import Immutable from 'seamless-immutable'
import {createReducer} from 'reduxsauce'

const INITIAL_STATE = Immutable({
    isLoggedIn: false,
    attempting: false
})

const doAttemptLogin = state => state.merge({attempting: true})

const doDoneAuth = state => state.merge({attempting: false})

const doLogin = state => state.merge({isLoggedIn: true})

const doLogout = state => state.merge({isLoggedIn: false})

const HANDLERS = {
    [Actions.Types.ATTEMPT_LOGIN]: doAttemptLogin,
    [Actions.Types.DONE_AUTH]: doDoneAuth,
    [Actions.Types.LOGIN]: doLogin,
    [Actions.Types.LOGOUT]: doLogout
}

export default createReducer(INITIAL_STATE, HANDLERS)