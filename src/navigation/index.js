import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'
import {connect} from 'react-redux'
import {Navigation as NavigationService} from '../services'

const Navigation = ({isLoggedIn}) => (
    <NavigationContainer ref={NavigationService.ref}>
        {isLoggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
)

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps)(Navigation)