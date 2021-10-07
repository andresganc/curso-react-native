
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const StackNRestaurants = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='restaurants'
                component={ Restaurants }
                options={{ title: 'Restaurantes stack'}}
            />
        </Stack.Navigator>
    )
}

export default StackNRestaurants
