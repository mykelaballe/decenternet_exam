import React, {useState, useRef} from 'react'
import {View, Image, StyleSheet} from 'react-native'
import {Screen, TextInput, Button, ButtonText, Spacer} from '../components'
import {Images} from '../themes'
import {connect} from 'react-redux'
import Actions from '../store/actions'

const Scrn = ({navigation, attempting, login}) => {

    const passwordRef = useRef()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeUsername = text => setUsername(text)
    const handleChangePassword = text => setPassword(text)

    const handleFocusPassword = () => passwordRef.current.focus()

    const handleLogin = () => {
        if(!attempting) login({username, password})
    }

    const handleGoToRegistration = () => navigation.navigate('Registration')

    return (
        <Screen>
            <View style={{alignItems:'center'}}>
                <Image source={Images.app_logo} style={style.logo} resizeMode='contain' />
            </View>

            <Spacer />

            <TextInput
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

            <Spacer />

            <ButtonText text='Register Here' onPress={handleGoToRegistration} />

            <Button disabled={attempting} text='Login' onPress={handleLogin} loading={attempting} />
        </Screen>
    )
}

const style = StyleSheet.create({
    logo: {
        width: 200,
        height: 200
    }
})

const mapStateToProps = state => ({
    attempting: state.auth.attempting
})

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(Actions.Creators.attemptLogin(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Scrn)