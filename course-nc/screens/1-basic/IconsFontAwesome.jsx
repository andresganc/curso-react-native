
import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

// Icons
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const IconsFontAwesome = () => {
    return (
        <Fragment>
            <FontAwesomeIcon icon={ faCoffee } size={25} color="#3D5AFE" />
        </Fragment>
    )
}

export default IconsFontAwesome
