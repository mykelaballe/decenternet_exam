import {createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
    attemptLogin: ['payload'],
    doneAuth: null,
    login: null,
    logout: null,
    setLoggedInUser: ['payload'],

    attemptRegister: ['payload'],
    registerUser: ['payload'],
    doneRegister: null,

    attemptGetNews: ['page'],
    doneGetNews: null,
    attemptGetMoreNews: ['page'],
    doneGetMoreNews: null,
    setNews: ['list'],
    attemptCreateNews: ['payload'],
    createNews: ['payload'],
    updateNews: ['id', 'payload'],
    deleteNews: ['id']
})

export default {
    Types,
    Creators
}