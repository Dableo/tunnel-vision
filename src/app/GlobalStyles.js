import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    body {
      box-sizing: border-box;
      background-color: black;
    }
    svg svg {
      overflow: visible
    }
`

export default GlobalStyles