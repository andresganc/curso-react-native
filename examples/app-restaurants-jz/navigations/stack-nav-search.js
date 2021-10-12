
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Search from '../screens/Search'

const Stack = createStackNavigator()

const StackSearch = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='search'
                component={Search}
                options={{ title: 'Search stack'}}
            />
        </Stack.Navigator>
    )
}

export default StackSearch

const styles = StyleSheet.create({})
