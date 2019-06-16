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
    margin: 0 auto;
    width: 100%;
    text-align: center;
    color: white;
    ${mq('small')} {
        padding: 60px 0;
    }
    ${mq('large')} {
        padding: 140px 0;
    }

    .header_primary-text {
        font-family: "proxima-nova",proxima-nova;
        ${mq('small')} {
            font-size: 26px; 
        }
        ${mq('large')} {
          font-size: 52px;
        }
        font-weight: 700;
        line-height: 1em;
        text-transform: uppercase;
    }

    .header_secondary-text {
        font-family: adobe-garamond-pro;
        font-style: italic;
        ${mq('small')} {
            font-size: 20px; 
        }
        ${mq('large')} {
          font-size: 30px;
        }
    }
 }
`