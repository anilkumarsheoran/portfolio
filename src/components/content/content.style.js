import { css } from '@emotion/core'
import mq from '../../utils/mediaQuery'

export default css`
  background-color: #edeeef;
  padding: 48px;
  font-family: proxima-nova;
  font-weight: 300;
  font-style: normal;
  letter-spacing: .01em;
  line-height: 1.4em;
  text-transform: none;

	${mq('small')} {
		font-size: 18px;
	}
	${mq('large')} {
		font-size: 20px;
	}

`