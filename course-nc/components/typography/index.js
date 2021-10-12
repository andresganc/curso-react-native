
import styled, {css} from 'styled-components/native'

// Fonts
import roboto from '../assets/fonts/fonts'

// Props base
import propsBase from '../assets/utils/props-base'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'


// ========================= TYPES ============================
const textBase = css ` font-size: 16px; color: #000000; margin: 0px; padding: 0px;`
const textH1 = css ` font-size: 28px; `
const textH2 = css ` font-size: 26px; `
const textH3 = css ` font-size: 24px; `
const textH4 = css ` font-size: 22px; `
const textH5 = css ` font-size: 20px; `
const textH6 = css ` font-size: 18px; `
const textP1 = css ` font-size: 16px; `
const textP2 = css ` font-size: 14px; `
const textP3 = css ` font-size: 12px; `
const textP4 = css ` font-size: 10px; `


// ========================= FONT WEIGHT ============================
const fontWeightLighter = css ` font-weight: lighter; `
const fontWeightNormal = css ` font-weight: normal; `
const fontWeightBold = css ` font-weight: bold; `


const typography = styled.Text`

    /* TextBase */
    ${ textBase }

    /* Font */
    ${ roboto }

    /* PROPS BASE */
    ${ propsBase }

    /* ================== TYPE ================ */
    ${ props => props.h1 && css ` ${ textH1 } `}
    ${ props => props.h2 && css ` ${ textH2 } `}
    ${ props => props.h3 && css ` ${ textH3 } `}
    ${ props => props.h4 && css ` ${ textH4 } `}
    ${ props => props.h5 && css ` ${ textH5 } `}
    ${ props => props.h6 && css ` ${ textH6 } `}
    ${ props => props.p1 && css ` ${ textP1 } `}
    ${ props => props.p2 && css ` ${ textP2 } `}
    ${ props => props.p3 && css ` ${ textP3 } `}
    ${ props => props.p4 && css ` ${ textP4 } `}

    /* ================== FONT WEIGHT ================ */
    ${ props => props.lighter && css ` ${ fontWeightLighter } `}
    ${ props => props.normal && css ` ${ fontWeightNormal } `}
    ${ props => props.bold && css ` ${ fontWeightBold } `}

    /* Colors */
    ${ colorsBG }
    ${ colorsText }

`;


export default typography
