
import React from 'react'

import styled from 'styled-components';

import { View, Button, Text } from 'react-native';



/*
const Title = styled(Text) `
    background-color: #E0E0E0;
`;
*/

/*
const Button = styled(TouchableOpacity) `
    background-color: #E0E0E0;
`;
*/

function ButtonNC() {
    return (
        <View>
            
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    )
}

export default ButtonNC