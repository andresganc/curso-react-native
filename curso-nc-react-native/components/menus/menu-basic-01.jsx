
import React from 'react'

import styled, {css} from 'styled-components/native'
import { View, Text } from 'react-native'


const menuBasic01 = () => {
    return (
        <Container>
            <View>
                <Text> Hola como estas </Text> 
            </View>
            
        </Container>
    )
}

const Container = styled.View `
    background-color: tomato; 
    color: #fff;
    width: 100%;
    height: 100px;
`

export default menuBasic01
