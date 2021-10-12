
import styled, { css } from "styled-components/native";

// Fonts
//import roboto from '@components/assets/fonts/fonts'

// Props base
import propsBase from '../assets/utils/props-base'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'


// ================== PROPS EXCLUSIVES ==================

// ==== FLEX ====
const Flex1 = css ` flex: 1;`
const Flex2 = css ` flex: 2;`
const Flex3 = css ` flex: 3;`
const Flex4 = css ` flex: 4;`
const Flex5 = css ` flex: 5;`
const Flex6 = css ` flex: 6;`

// ==== FLEX DIRECTION ====
const FDColumn = css ` flex-direction: column;`
const FDRow = css ` flex-direction: row;`
const FDColumnReverse = css ` flex-direction: column-reverse;`
const FDRowReverse = css ` flex-direction: row-reverse;`

// ==== DIRECTION (LAYOUT DIRECTION) ====
const DLTR = css ` direction: ltr; `
const DRTL = css ` direction: rtl; `

// ==== Justify Content ====
const JCFlexStart = css ` justify-content: flex-start; `
const JCCenter = css ` justify-content: center; `
const JCFlexEnd = css ` justify-content: flex-end; `
const JCSpaceAround = css ` justify-content: space-around; `
const JCSpaceBetween = css ` justify-content: space-between; `
const JCSpaceEvely = css ` justify-content: space-evenly; `

// ==== Align Content ====
const ACFlexStart = css ` align-content: flex-start; `
const ACFlexCenter = css ` align-content: center; `
const ACFlexEnd = css ` align-content: flex-End; `
const ACSpaceAround = css ` align-content: space-around; `
const ACSpaceBetween = css ` align-content: space-between; `
const ACStretch = css ` align-content: stretch; `

// ==== Align Items ====
const AIFlexStart = css ` align-items: flex-start; `
const AICenter = css ` align-items: center; `
const AIFlexEnd = css ` align-items: flex-end; `
const AIStretch = css ` align-items: stretch; `
const AIBaseline = css ` align-items: baseline; `

// ==== Align Self ====
const ASFlexStart = css ` align-self: flex-start;  `
const ASCenter = css ` align-self: center; `
const ASFlexEnd = css ` align-self: flex-end; `
const ASStretch = css ` align-self: stretch; `
const ASBaseline = css ` align-self: baseline; `
const ASAuto = css ` align-self: auto; `



const Container = styled.View `

    /* FONT */

    /* ================== PROPS EXCLUSIVES ================== */

    /* ==== FLEX ==== */
    ${ props => props.flex1 && css ` ${ Flex1 } `}
    ${ props => props.flex2 && css ` ${ Flex2 } `}
    ${ props => props.flex3 && css ` ${ Flex3 } `}
    ${ props => props.flex4 && css ` ${ Flex4 } `}
    ${ props => props.flex5 && css ` ${ Flex5 } `}
    ${ props => props.flex6 && css ` ${ Flex6 } `}

    /* ==== FLEX DIRECTION ==== */
    ${ props => props.fdColumn && css ` ${ FDColumn }`}
    ${ props => props.fdRow && css ` ${ FDRow }`}
    ${ props => props.fdColumnReverse && css ` ${ FDColumnReverse }`}
    ${ props => props.fdRowReverse && css ` ${ FDRowReverse }`}

    /* ==== DIRECTION (LAYOUT DIRECTION) ==== */
    ${ props => props.dLtr && css ` ${ DLTR }`}
    ${ props => props.dRtl && css ` ${ DRTL }`}

    /* JUSTIFY CONTENT */
    ${ props => props.jcFlexStart && css ` ${ JCFlexStart } `}
    ${ props => props.jcCenter && css ` ${ JCCenter } `}
    ${ props => props.jcFlexEnd && css ` ${ JCFlexEnd }`}
    ${ props => props.jcSpaceAround && css ` ${ JCSpaceAround } `}
    ${ props => props.jcSpaceBetween && css ` ${ JCSpaceBetween } `}
    ${ props => props.jcSpaceEvely && css ` ${ JCSpaceEvely } `}

    /* ALIGN CONTENT */
    ${ props => props.acFlexStart && css ` ${ ACFlexStart }`}
    ${ props => props.acCenter && css ` ${ ACFlexCenter } `}
    ${ props => props.acFlexEnd && css ` ${ ACFlexEnd } `}
    ${ props => props.acSpaceAround && css ` ${ ACSpaceAround } `}
    ${ props => props.acSpaceBetween && css ` ${ ACSpaceBetween } `}
    ${ props => props.acStretch && css ` ${ ACStretch } `}

    /* ALIGN ITEMS */
    ${ props => props.aiFlexStart && css ` ${ AIFlexStart } `}
    ${ props => props.aiCenter && css ` ${ AICenter } `}
    ${ props => props.aiFlexEnd && css ` ${ AIFlexEnd } `}
    ${ props => props.aiStretch && css ` ${ AIStretch } `}
    ${ props => props.aiBaseline && css ` ${ AIBaseline } `}

    /* ALIGN SELF */
    ${ props => props.asFlexStart && css ` ${ ASFlexStart } `}
    ${ props => props.asCenter && css ` ${ ASCenter } `}
    ${ props => props.asFlexEnd && css ` ${ ASFlexEnd } `}
    ${ props => props.asStretch && css ` ${ ASStretch } `}
    ${ props => props.asBaseline && css ` ${ ASBaseline } `}
    ${ props => props.asAuto && css ` ${ ASAuto } `}

    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${ propsBase }

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }

`;

export default Container;