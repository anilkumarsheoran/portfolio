import {css} from '@emotion/core'
import mq from '../../utils/mediaQuery'

export default css`

&.header {
    background-color: black;
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: 1;

    img {
        margin-bottom: 0;
    }
}
 .header_layover{
    position: absolute;
    top: 0;
    padding: 140px 0;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    color: white;

    .header_primary-text {
        font-family: "proxima-nova",proxima-nova;
        font-size: 52px;
        font-weight: 700;
        line-height: 1em;
        text-transform: uppercase;
    }

    .header_secondary-text {
        font-family: adobe-garamond-pro;
        font-style: italic;
    }
 }
`