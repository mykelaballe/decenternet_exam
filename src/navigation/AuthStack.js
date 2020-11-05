import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import * as Scrn from '../screens'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Login'
            component={Scrn.Login}
            options={{
                headerShown: false
            }}
        />

        <Stack.Screen
            name='Registration'
            component={Scrn.Registration}
        />
    </Stack.Navigator>
)