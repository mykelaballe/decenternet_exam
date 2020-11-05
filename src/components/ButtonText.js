import React from 'react'
import Button from './Button'

export default props => (
    <Button
        mode='text'
        {...props}
    >
        {props.text}
    </Button>
)