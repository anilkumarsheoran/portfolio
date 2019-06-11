import { css } from '@emotion/core'

export default css`
 &.footer {
    background-color: #26262a;
    color: white;
    text-align: center;
    padding: 40px;

    .footer_primary-text {
        font-family: adobe-garamond-pro;
        font-style: italic;
    }
     
    .footer-nav {
        .footer-list {
            display: inline-block;
            padding: 5px;
        
            .footer-link {
              text-decoration: none;
              color: white;
            }
          }
    }
 }
`
