import axios from 'axios'

export default axios.create({
    baseURL: 'http://newsapi.org/v2/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})