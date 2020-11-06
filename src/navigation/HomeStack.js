import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import * as Scrn from '../screens'
import {ButtonIcon, Row} from '../components'
import {Colors} from '../themes'
import {Navigation} from '../services'
import {connect} from 'react-redux'
import Actions from '../store/actions'

const Stack = createStackNavigator()

const HomeStack = ({user, logout}) => {

    const handleGoToCreate = () => Navigation.navigate('CreateNews')

    const handleLogout = () => logout()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Scrn.Home}
                options={{
                    title: `Welcome, ${user.name}`,
                    headerRight: () => (
                        <Row>
                            <ButtonIcon icon='plus-circle-outline' onPress={handleGoToCreate} />
                            <ButtonIcon color={Colors.warning} icon='logout' onPress={handleLogout} />
                        </Row>
                    )
                }}
            />

            <Stack.Screen
                name='CreateNews'
                component={Scrn.CreateNews}
                options={route => ({
                    title: route.params?.news ? 'Edit News' : 'Create News'
                })}
            />

            <Stack.Screen
                name='NewsDetail'
                component={Scrn.NewsDetail}
                options={{
                    title: 'News Detail'
                }}
            />
        </Stack.Navigator>
    )
}

const mapStateToProps = state => ({
    user: state.user.loggedInUser
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(Actions.Creators.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeStack)