import 'react-native-gesture-handler'
import React from 'react'
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import {Provider} from 'react-redux'
import store from './src/store'

const Root = props => (
    <Provider store={store}>
        <App {...props} />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root)
