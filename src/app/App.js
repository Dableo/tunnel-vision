import React from 'react'
import GlobalStyles from './GlobalStyles'
import World from 'features/world/World'
import theme from './theme'
import {ThemeProvider} from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <World>

      </World>
    </ThemeProvider>
  );
}

export default App;
