import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"


export default (wrappedComponent, styles) => styled(wrappedComponent)`
${props => (styles ? styles.styles : '')};
`;