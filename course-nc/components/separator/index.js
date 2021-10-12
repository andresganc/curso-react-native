
import styled, { css } from 'styled-components'

// Props base
import propsBase from '@components/assets/utils/props-base'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'


// ========================= SEPARATOR BASE ====================
const SeparatorBase = css`
    height: 1px;
    width: 90%;
    border-radius: 1px;
    background-color: #9E9E9E;
`

// ================== PROPS EXCLUSIVES ==================

// ==== HEIGHT ====
const Height1 = css` height: 1px; `
const Height2 = css` height: 2px; `
const Height3 = css` height: 3px; `
const Height4 = css` height: 4px; `
const Height5 = css` height: 5px; `
const Height6 = css` height: 6px; `
const Height7 = css` height: 7px; `
const Height8 = css` height: 8px; `
const Height9 = css` height: 9px; `
const Height10 = css` height: 10px; `

// ==== WIDTH ====
const Width1 = css` width: 10%; `
const Width2 = css` width: 20%; `
const Width3 = css` width: 30%; `
const Width4 = css` width: 40%; `
const Width5 = css` width: 50%; `
const Width6 = css` width: 60%; `
const Width7 = css` width: 70%; `
const Width8 = css` width: 80%; `
const Width9 = css` width: 90%; `
const Width10 = css` width: 100%; `

// ================== PROPS EXCLUSIVES ==================


const Separator = styled.View`

    ${SeparatorBase}

    /* ================== PROPS EXCLUSIVES ================== */
    /* HEIGHT */    
    ${props => props.height1 && css` ${Height1} `}
    ${props => props.height2 && css` ${Height2} `}
    ${props => props.height3 && css` ${Height3} `}
    ${props => props.height4 && css` ${Height4} `}
    ${props => props.height5 && css` ${Height5} `}
    ${props => props.height6 && css` ${Height6} `}
    ${props => props.height7 && css` ${Height7} `}
    ${props => props.height8 && css` ${Height8} `}
    ${props => props.height9 && css` ${Height9} `}
    ${props => props.height10 && css` ${Height10} `}

    /* WIDTH */
    ${props => props.width1 && css` ${Width1} `}
    ${props => props.width2 && css` ${Width2} `}
    ${props => props.width3 && css` ${Width3} `}
    ${props => props.width4 && css` ${Width4} `}
    ${props => props.width5 && css` ${Width5} `}
    ${props => props.width6 && css` ${Width6} `}
    ${props => props.width7 && css` ${Width7} `}
    ${props => props.width8 && css` ${Width8} `}
    ${props => props.width9 && css` ${Width9} `}
    ${props => props.width10 && css` ${Width10} `}

    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${colorsBG}

`

export default Separator