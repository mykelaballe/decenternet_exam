import {takeLatest, put, select, call} from 'redux-saga/effects'
import Actions from '../actions'
import {Func, Say} from '../../utils'
import {API, Navigation} from '../../services'

function * getNews() {
    try {
        const res = yield call(API.getNews)

        if(res.status === 200) {
            const news = res.data.articles.map(n => ({
                id: Func.generateID(),
                title: n.title,
                body: n.description,
                cover: n.urlToImage
            }))
            yield put(Actions.Creators.setNews(news))
        }
    }
    catch(err) {
        Say.err(err)
    }

    yield put(Actions.Creators.doneGetNews())
}

function * getMoreNews({page}) {
    try {
        const res = yield call(API.getNews, page)

        if(res.status === 200) {
            const state = yield select()

            let news = state.news.list.slice()

            const moreNews = res.data.articles.map(n => ({
                id: Func.generateID(),
                title: n.title,
                body: n.description,
                cover: n.urlToImage
            }))

            news = news.concat(moreNews)

            yield put(Actions.Creators.setNews(news))
        }
    }
    catch(err) {
        Say.err(err)
    }

    yield put(Actions.Creators.doneGetMoreNews())
}

function * createNews({payload}) {
    try {
        let {title, body} = payload

        title = title.trim()
        body = body.trim()

        if(!title || !body) Say.warn('Please complete all fields')
        else {
            yield put(Actions.Creators.createNews({
                id: Func.generateID(),
                title,
                body
            }))

            Navigation.navigate('Home')

            Say.ok('News created')
        }
    }
    catch(err) {
        Say.err(err)
    }
}

function * updateNews({id, payload}) {
    try {
        let {title, body} = payload

        title = title.trim()
        body = body.trim()

        if(!title || !body) Say.warn('Please complete all fields')
        else {
            const state = yield select()

            const news = state.news.list.map(n => {
                if(n.id === id) {
                    return {
                        ...n,
                        title,
                        body
                    }
                }

                return n
            })

            yield put(Actions.Creators.setNews(news))

            Navigation.navigate('Home')

            Say.ok('News updated')
        }
    }
    catch(err) {
        Say.err(err)
    }
}

function * deleteNews({id}) {
    try {
        const state = yield select()

        const news = state.news.list.filter(n => n.id !== id)

        yield put(Actions.Creators.setNews(news))

        Navigation.navigate('Home')
    }
    catch(err) {
        Say.err(err)
    }
}

export default function * handler() {
    yield takeLatest(Actions.Types.ATTEMPT_GET_NEWS, getNews)
    yield takeLatest(Actions.Types.ATTEMPT_GET_MORE_NEWS, getMoreNews)
    yield takeLatest(Actions.Types.ATTEMPT_CREATE_NEWS, createNews)
    yield takeLatest(Actions.Types.UPDATE_NEWS, updateNews)
    yield takeLatest(Actions.Types.DELETE_NEWS, deleteNews)
}