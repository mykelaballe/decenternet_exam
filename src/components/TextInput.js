import React, {forwardRef} from 'react'
import {TextInput as TxtInput} from 'react-native-paper'
import {Colors} from '../themes'

export default forwardRef((props, ref) => (
    <TxtInput
        ref={ref}
        underlineColor='transparent'
        style={{
            elevation: 4,
            height: props.multiline !== undefined ? 160 : undefined
        }}
        theme={{
            colors: {
                primary: Colors.primary
            }
        }}
        {...props}
    />
))