import React from 'react'
import {IconButton} from 'react-native-paper'
import {Colors} from '../themes'

export default props => <IconButton color={props.color || Colors.primary} {...props} />