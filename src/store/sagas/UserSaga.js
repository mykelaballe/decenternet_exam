import {takeLatest, put, select} from 'redux-saga/effects'
import Actions from '../actions'
import {Navigation} from '../../services'
import {Say} from '../../utils'

function * register({payload}) {
    try {
        const state = yield select()

        let {name, username, password} = payload

        name = name.trim()
        username = username.trim()
        password = password.trim()

        if(!name || !username || !password) Say.warn('Please complete all fields')
        else {
            //call registration endpoint here

            const exists = state.user.registeredUsers.filter(u => u.username === username)

            if(exists.length > 0) Say.warn('Username already exists')
            else {
                yield put(
                    Actions.Creators.registerUser({
                        name,
                        username,
                        password
                    })
                )
                Say.ok('Account created')
                Navigation.navigate('Login')
            }
        }
    }
    catch(err) {
        Say.err(err)
    }

    yield put(Actions.Creators.doneRegister())
}

export default function * handler() {
    yield takeLatest(Actions.Types.ATTEMPT_REGISTER, register)
}