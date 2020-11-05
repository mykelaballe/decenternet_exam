import ApiInstance from './ApiInstance'
import Consts from '../utils/Consts'

const getNews = (page = 1) => ApiInstance.get(`everything?q=bitcoin&pageSize=4&page=${page}&apiKey=${Consts.apiKey}`)

export default {
    getNews
}