
/*
Button

- El componente Button de React Native es un componente basico 
- Permite muy pocas modificaciones
- El texto del boton se escribe por una propiedad de este

*/

import React from 'react'
import styled, { css } from 'styled-components/native'
import { View, Button, Alert } from 'react-native'


const viewButton = () => {
    return (
        <View>
            <Button
                title="EXITO"
            />

            <Button
                onPress={ () => console.log('Mensaje por console') }
                title="Mensaje en consola"
                color="#827717"
                accessibilityLabel="Learn more about this purple button"
            />

            <Button
                onPress={ () => Alert.alert('Esta es la ventana Alert de React Native !!!') }
                title="Mensaje por alert"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />

        </View>
        
    )
}


export default viewButton

