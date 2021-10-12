
import React, { Fragment } from 'react'
import { StyleSheet, View, Text } from 'react-native'

// Styles
const styles = StyleSheet.create({ 
    container: {
        backgroundColor: '#424242',
        height: 50,
        borderRadius: 5,
        padding: 8,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

const StyleSheetReactNative = () => {
    return (
        <Fragment>
            <View style={styles.container}>
                <Text style={styles.text}> Component StyleSheet - React Native</Text>
            </View>
        </Fragment>
    )
}

export default StyleSheetReactNative
