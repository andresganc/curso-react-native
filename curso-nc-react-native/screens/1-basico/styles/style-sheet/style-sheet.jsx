
/* STYLES CSS IN JS - STYLESHEET */

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'

const styleSheet = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> STYLES SHEET </Text>
            <Text style={styles.subtitle}> STYLES SHEET </Text>
            <Text style={styles.texto}> Estos son estylos por Styles Sheet de React Native </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={ () => Alert.alert('StyleSheet') }
            >
                <Text style={styles.textButton}> EXITO </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#424242',
        height: 800,
        padding: 20,
    },

    title: {
        fontSize: 18,
        color:  '#D500F9',
        fontWeight: 'bold',
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 16,
        color: '#FF4081',
        marginBottom: 20,
    },

    texto: {
        fontSize: 14,
        color: '#76FF03',
        marginBottom: 20,
    },

    button: {
        backgroundColor: '#EF6C00',
        borderRadius: 3,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 28,
        paddingRight: 28,
    },

    textButton: {
        color: '#fff',
    }

})

export default styleSheet
