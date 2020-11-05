import React from 'react'
import {FlatList as List} from 'react-native'
import ActivityIndicator from './ActivityIndicator'

export default props => {

    const keyExtractor = (item, index) => index.toString()

    if(props.loading) return <ActivityIndicator />

    return (
        <List
            {...props}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        />
    )
}