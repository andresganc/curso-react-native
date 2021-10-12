
import React, { Fragment } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    button: {
        backgroundColor: '#D500F9',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10
    },
    buttonText: {
        color: '#fff'
    } 
})

const TouchableOpacityReactNative = () => {
    return (
        <Fragment>
            <TouchableOpacity>
                <Text> Touchable Opacity as link </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Touchable Opacity as button </Text>
            </TouchableOpacity>
        </Fragment>
    )
}

export default TouchableOpacityReactNative
