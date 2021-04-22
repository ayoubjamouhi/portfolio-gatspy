import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --grey: #666c7e;
  }
  body {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 36px;
  }
`

export default GlobalStyles
