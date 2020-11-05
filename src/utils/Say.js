import {Alert} from 'react-native'

const ok = msg => Alert.alert('Success', msg)

const warn = msg => Alert.alert('Oops!', msg)

const err = msg => Alert.alert('Uh-oh!', msg)

export default {
    ok,
    warn,
    err
}