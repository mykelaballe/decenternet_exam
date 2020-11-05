import React, {useState, useRef, useEffect} from 'react'
import {View, Image, StyleSheet} from 'react-native'
import {Screen, Footer, TextInput, Button, Spacer} from '../components'
import {Colors, Images} from '../themes'
import {connect} from 'react-redux'
import Actions from '../store/actions'

const Scrn = ({route, create, update}) => {

    const {params = {}} = route
    const isEdit = params.news !== undefined

    const bodyRef = useRef()

    const [title, setTitle] = useState(params.news?.title || '')
    const [body, setBody] = useState(params.news?.body || '')

    const handleChangeTitle = text => setTitle(text)
    const handleChangeBody = text => setBody(text)

    const handleFocusBody = () => bodyRef.current.focus()

    const handleSubmit = () => {
        isEdit ? update(params.news.id, {title, body}) : create({title, body})
    }

    return (
        <>
            <Screen>
                <View style={{alignItems:'center'}}>
                    <Image source={Images.img2} style={style.img} resizeMode='contain' />
                </View>

                <Spacer />

                <TextInput
                    label='Title'
                    value={title}
                    onChangeText={handleChangeTitle}
                    onSubmitEditing={handleFocusBody}
                    autoCapitalize='words'
                    returnKeyType='next'
                />

                <Spacer />

                <TextInput
                    ref={bodyRef}
                    label='Body'
                    value={body}
                    onChangeText={handleChangeBody}
                    multiline
                />
            </Screen>

            <Footer>
                <Button color={isEdit ? Colors.info : Colors.success} text={isEdit ? 'Update' : 'Create'} onPress={handleSubmit} />
            </Footer>
        </>
    )
}

const style = StyleSheet.create({
    img: {
        width: 150,
        height: 150
    }
})

const mapDispatchToProps = dispatch => ({
    create: payload => dispatch(Actions.Creators.attemptCreateNews(payload)),
    update: (id, payload) => dispatch(Actions.Creators.updateNews(id, payload))
})

export default connect(null, mapDispatchToProps)(Scrn)