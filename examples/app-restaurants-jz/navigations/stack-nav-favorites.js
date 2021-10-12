
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Favorites from '../screens/Favorites'

const Stack = createStackNavigator()

const StackNFavorites = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='favorites'
                component={ Favorites }
                options={{ title: 'Favoritos stack'}}
            />
        </Stack.Navigator>
    )
}

export default StackNFavorites

const styles = StyleSheet.create({})
