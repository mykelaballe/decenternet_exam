import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import {Metrics} from '../themes'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export default ({children}) => (
    <SafeAreaView style={style.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
            {children}
        </KeyboardAwareScrollView>
    </SafeAreaView>
)

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: Metrics.lg
    }
})