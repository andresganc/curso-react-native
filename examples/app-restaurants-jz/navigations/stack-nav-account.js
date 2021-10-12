
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Account from '../screens/Account'


const Stack = createStackNavigator()

const StackNAccount = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='account'
                component={ Account }
                options={{ title: 'Cuenta stack'}}
            />
        </Stack.Navigator>
    )
}

export default StackNAccount