import { css } from '@emotion/core'
import mq from '../../utils/mediaQuery'

export default css`
&.navigation{
  position: relative;
  z-index: 2;
  ${mq('large')} {
    position: absolute;
  }

  .hamburger-icon {
    ${mq('large')} {
      display: none !important;
    }
    ${mq('small')} {
      display: block;
      position: absolute;
      right: 5px;
}
    }
  }
  
  ul {
    ${mq('large')} {
      display:block ;
      height: auto;
      background: transparent;
      width: auto;
    } 

    ${mq('small')} {
      height: 100vh;
      background: white;
      width: 100vw;
      margin-left: initial;
      display:none;

      &.hamburger-nav {
        display: block;
      }
    }
  }

  .close-btn {
    display: none;

    ${mq('small')} {
      display: inline-block;
      position: absolute;
      right: 10px;
    }
  }
}



  .navigation-list {
    padding: 5px;

    ${mq('small')} {
      display: block;
    }

    ${mq('large')} {
      display: inline-block;
    }

    .navigation-link {
      text-decoration: none;
      ${mq('small')} {
        color: black;
      }

      ${mq('large')} {
        color: white;
      }
    }
  }



`