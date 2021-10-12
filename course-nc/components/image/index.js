
import styled, { css } from 'styled-components'

// Props base
import propsBase from '@components/assets/utils/props-base'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'
import colorsText from '@components/assets/colors/colors-text'


// ========================= ICON ============================
/*
const SVG = styled.svg`
    flex: none;
    transition: fill 0.25s;
    width: 40px;
    height: 40px;
    fill: white;
`
*/

// ================== PROPS EXCLUSIVES ==================
// ==== TYPES ====
// Type base
const typeBase = css `
    width: 50px;
    height: 50px;
`

// Type Round
const typeRound = css `
    width: 50%;
    height: 50%;
`

// ==== SIZE ====
const Size1 = css ` width: 10px; height: 10px; `
const Size2 = css ` width: 20px; height: 20px; `
const Size3 = css ` width: 30px; height: 30px; `
const Size4 = css ` width: 40px; height: 40px; `
const Size5 = css ` width: 50px; height: 50px; `
const Size6 = css ` width: 60px; height: 60px; `
const Size7 = css ` width: 70px; height: 70px; `
const Size8 = css ` width: 80px; height: 80px; `
const Size9 = css ` width: 90px; height: 90px; `
const Size10 = css ` width: 100px; height: 100px; `
const Size11 = css ` width: 110px; height: 110px; `
const Size12 = css ` width: 120px; height: 120px; `
const Size13 = css ` width: 130px; height: 130px; `
const Size14 = css ` width: 140px; height: 140px; `
const Size15 = css ` width: 150px; height: 150px; `
const Size16 = css ` width: 160px; height: 160px; `
const Size17 = css ` width: 170px; height: 170px; `
const Size18 = css ` width: 180px; height: 180px; `
const Size19 = css ` width: 190px; height: 190px; `
const Size20 = css ` width: 200px; height: 200px; `

// ================== PROPS EXCLUSIVES ==================


const Image = styled.Image `

    /* IMAGE BASE */
    ${ typeBase } 


    /* ================== PROPS EXCLUSIVES ================== */
    /* TYPE */
    ${ props => props.round && css ` ${ typeRound } `}
    
    /* SIZE */
    ${ props => props.size1 && css ` ${ Size1 } `}
    ${ props => props.size2 && css ` ${ Size2 } `}
    ${ props => props.size3 && css ` ${ Size3 } `}
    ${ props => props.size4 && css ` ${ Size4 } `}
    ${ props => props.size5 && css ` ${ Size5 } `}
    ${ props => props.size6 && css ` ${ Size6 } `}
    ${ props => props.size7 && css ` ${ Size7 } `}
    ${ props => props.size8 && css ` ${ Size8 } `}
    ${ props => props.size9 && css ` ${ Size9 } `}
    ${ props => props.size10 && css ` ${ Size10 } `}
    ${ props => props.size11 && css ` ${ Size11 } `}
    ${ props => props.size12 && css ` ${ Size12 } `}
    ${ props => props.size13 && css ` ${ Size13 } `}
    ${ props => props.size14 && css ` ${ Size14 } `}
    ${ props => props.size15 && css ` ${ Size15 } `}
    ${ props => props.size16 && css ` ${ Size16 } `}
    ${ props => props.size17 && css ` ${ Size17 } `}
    ${ props => props.size18 && css ` ${ Size18 } `}
    ${ props => props.size19 && css ` ${ Size19 } `}
    ${ props => props.size20 && css ` ${ Size20 } `}
    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }
    
`

export default Image;