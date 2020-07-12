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
      font-family: sans-serif;
    }
    svg svg {
      overflow: visible
    }
    #root:focus {
      outline: none;
    }
    #no-focus {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.8);
      color: white;
      font-size: 1vw;
      pointer-events: none;
    }
    #root:focus ~ #no-focus {
      opacity: 0;
    }
`

export default GlobalStyles