import React from 'react'
import {Button as Btn} from 'react-native-paper'
import {Colors} from '../themes'

export default props => (
    <Btn
        mode='contained'
        color={props.color || Colors.primary}
        onPress={props.onPress}
        {...props}
    >
        {props.text}
    </Btn>
)