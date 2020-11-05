import React from 'react'
import {View, StyleSheet, Image, Alert} from 'react-native'
import {Text, Spacer, Footer, ButtonText} from '../components'
import {Colors, Metrics} from '../themes'
import {connect} from 'react-redux'
import Actions from '../store/actions'

const Scrn = ({route, deleteNews}) => {

    const {id, title, body, cover} = route.params.news

    const handleDelete = () => {
        Alert.alert(
            'Delete News',
            'Are you sure?',
            [
                {
                    text: 'Yes',
                    onPress: () => deleteNews(id)
                },
                {
                    text: 'No',
                    style: 'cancel'
                }
            ],
            {
                cancelable: true
            }
        )
    }

    return (
        <>
            <Image source={{uri: cover}} style={style.img} resizeMode='cover' />

            <Spacer />

            <View style={style.innerContainer}>
                <Text style={style.title}>{title}</Text>

                <Spacer />

                <Text>{body}</Text>
            </View>

            <Footer>
                <ButtonText color={Colors.danger} text='Delete' onPress={handleDelete} />
            </Footer>
        </>
    )
}

const style = StyleSheet.create({
    innerContainer: {
        flex: 1,
        padding: Metrics.md
    },
    img: {
        width: undefined,
        height: 250
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    }
})

const mapDispatchToProps = dispatch => ({
    deleteNews: id => dispatch(Actions.Creators.deleteNews(id))
})

export default connect(null, mapDispatchToProps)(Scrn)