import moment from 'moment'

const generateID = () => moment().format('YYYY-MM-DD:HH:mm:ssSSSSS')

export default {
    generateID
}