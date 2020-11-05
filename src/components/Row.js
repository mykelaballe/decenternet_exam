import React from 'react'
import {View, StyleSheet} from 'react-native'

export default ({children}) => (
    <View style={style.container}>
        {children}
    </View>
)

const style = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})