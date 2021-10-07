
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

const StackNAccount = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='stack-account'
                component={ StackNAccount }
                options={{ title: 'Cuenta stack'}}
            />
        </Stack.Navigator>
    )
}

export default StackNAccount