import React from 'react'
import {Card} from 'react-native-paper'
import ButtonText from './ButtonText'
import Text from './Text'
import {Navigation} from '../services'

export default ({data}) => {

    const handleView = () => Navigation.navigate('NewsDetail', {news: data})

    const handleEdit = () => Navigation.navigate('CreateNews', {news: data})

    return (
        <Card elevation={4} style={{marginVertical: 3}} onPress={handleView}>
            <Card.Cover source={{uri: data.cover}} />

            <Card.Title title={data.title} />

            <Card.Content>
                <Text numberOfLines={2}>{data.body}</Text>
            </Card.Content>

            <Card.Actions>
                <ButtonText text='Edit' onPress={handleEdit} />
            </Card.Actions>
        </Card>
    )
}