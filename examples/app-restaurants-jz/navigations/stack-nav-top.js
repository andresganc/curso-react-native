
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Top from '../screens/Top'

const Stack = createStackNavigator()

const StackNTop = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='top'
                component={ Top }
                options={{ title: 'Top stack'}}
            />
        </Stack.Navigator>
    )
}

export default StackNTop

const styles = StyleSheet.create({})
