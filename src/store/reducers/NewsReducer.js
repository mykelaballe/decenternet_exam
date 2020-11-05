import Actions from '../actions'
import Immutable from 'seamless-immutable'
import {createReducer} from 'reduxsauce'

const INITIAL_STATE = Immutable({
    attemptingGetList: false,
    attemptingGetMoreList: false,
    list: []
})

const doAttemptGetList = state => state.merge({attemptingGetList: true})

const doDoneGetList = state => state.merge({attemptingGetList: false})

const doAttemptGetMoreList = state => state.merge({attemptingGetMoreList: true})

const doDoneGetMoreList = state => state.merge({attemptingGetMoreList: false})

const doCreateNews = (state, {payload}) => (
    state.merge({
        list: [
            payload,
            ...state.list,
        ]
    })
)

const doSetNews = (state, {list}) => state.merge({list})

const HANDLERS = {
    [Actions.Types.ATTEMPT_GET_NEWS]: doAttemptGetList,
    [Actions.Types.DONE_GET_NEWS]: doDoneGetList,
    [Actions.Types.ATTEMPT_GET_MORE_NEWS]: doAttemptGetMoreList,
    [Actions.Types.DONE_GET_MORE_NEWS]: doDoneGetMoreList,
    [Actions.Types.CREATE_NEWS]: doCreateNews,
    [Actions.Types.SET_NEWS]: doSetNews
}

export default createReducer(INITIAL_STATE, HANDLERS)