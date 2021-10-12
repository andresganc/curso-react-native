
import React, { Fragment } from 'react'
import { Image, StyleSheet } from 'react-native'

// Images
//import { ImageReact } from '../../../assets/img/react.png'

const styles = StyleSheet.create ({
    image: {
        width: 120,
        height: 120,
        borderRadius: 80
    }
})

const ImageReactNative = () => {
    return (
        <Fragment>
            <Image style={styles.image} source={{uri:'https://bucket-nc-images.s3.amazonaws.com/cards/card-01-300px.jpg'}} />
        </Fragment>
    )
}

export default ImageReactNative
