
import styled, { css } from 'styled-components/native'

// Fonts
import roboto from '../assets/fonts/fonts'

// Props base
import propsBase from '../assets/utils/props-base'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'


// ========================= BUTTON BASE ============================
const buttonBase = css`
    font-size: 15px;
    padding: 7px 12px;
    border: none;
    border-radius: 0px;
    background-color: #03A9F4;
    &:hover {
        background-color: #03A9F4;
        //background-color: rgba(255, 255, 255, .1)
    }
`
// ================== PROPS EXCLUSIVES ==================


const ButtonNC = styled.TouchableOpacity`

    /* FONT */

    /* BUTTON BASE */
    ${buttonBase} 

    /* ================== PROPS EXCLUSIVES ================== */
    /* ==== TYPES ==== */
    
    
    /* ================== PROPS EXCLUSIVES ================== */

    /* PROPS BASE */
    ${propsBase}
    
    /* COLORS */
    ${colorsBG}
    ${colorsText}
`

export default ButtonNC;