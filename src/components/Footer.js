import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Metrics} from '../themes'

export default ({children}) => (
    <View style={style.container}>
        {children}
    </View>
)

const style = StyleSheet.create({
    container: {
        padding: Metrics.md
    }
})