import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './app'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { CssReset } from './styles/css-reset'

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssReset />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
