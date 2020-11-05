import {takeLatest, put, select} from 'redux-saga/effects'
import Actions from '../actions'
import {Say} from '../../utils'

function * attemptLogin({payload}) {
    try {
        const state = yield select()

        let {username, password} = payload

        if(!username || !password) Say.warn('Please enter your username and password')
        else {
            //call login endpoint here

            const exists = state.user.registeredUsers.filter(u => u.username === username)

            if(exists.length === 0) Say.warn('Account does not exist')
            else if(exists.length > 0) {
                if(exists[0].password !== password) Say.warn('Invalid credentials')
                else {
                    yield put(Actions.Creators.setLoggedInUser(exists[0]))
                    yield put(Actions.Creators.login())
                }
            }
        }
    }
    catch(err) {
        Say.err(err)
    }

    yield put(Actions.Creators.doneAuth())
}

export default function * handler() {
    yield takeLatest(Actions.Types.ATTEMPT_LOGIN, attemptLogin)
}