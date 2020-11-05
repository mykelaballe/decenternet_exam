import React, {useState, useRef} from 'react'
import {StyleSheet, Image, View} from 'react-native'
import {Screen, Footer, TextInput, Button, Spacer} from '../components'
import {Colors, Images} from '../themes'
import {connect} from 'react-redux'
import Actions from '../store/actions'

const Scrn = ({attempting, register}) => {

    const usernameRef = useRef()
    const passwordRef = useRef()

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeName = text => setName(text)
    const handleChangeUsername = text => setUsername(text)
    const handleChangePassword = text => setPassword(text)

    const handleFocusUsername = () => usernameRef.current.focus()
    const handleFocusPassword = () => passwordRef.current.focus()

    const handleSubmit = () => {
        if(!attempting) register({name, username, password})
    }

    return (
        <View style={style.container}>
            <Screen>
                
                <View style={{alignItems:'center'}}>
                    <Image source={Images.img1} style={style.img} resizeMode='contain' />
                </View>

                <Spacer />

                <TextInput
                    label='Name'
                    value={name}
                    onChangeText={handleChangeName}
                    onSubmitEditing={handleFocusUsername}
                    returnKeyType='next'
                />

                <Spacer />

                <TextInput
                    ref={usernameRef}
                    label='Username'
                    value={username}
                    onChangeText={handleChangeUsername}
                    onSubmitEditing={handleFocusPassword}
                    autoCapitalize='none'
                    returnKeyType='next'
                />

                <Spacer />

                <TextInput
                    ref={passwordRef}
                    label='Password'
                    value={password}
                    onChangeText={handleChangePassword}
                    autoCapitalize='none'
                    secureTextEntry
                />
            </Screen>

            <Footer>
                <Button disabled={attempting} text='Confirm' onPress={handleSubmit} loading={attempting} />
            </Footer>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light
    },
    img: {
        width: 150,
        height: 150
    }
})

const mapStateToProps = state => ({
    attempting: state.user.attemptingRegister
})

const mapDispatchToProps = dispatch => ({
    register: payload => dispatch(Actions.Creators.attemptRegister(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Scrn)