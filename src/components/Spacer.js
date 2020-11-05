import React from 'react'
import {View} from 'react-native'
import {Metrics} from '../themes'

export default ({h}) => (
    <View
        style={{
            [`margin${h ? 'Horizontal' : 'Vertical'}`]: Metrics.rg
        }}
    />
)