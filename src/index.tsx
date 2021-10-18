import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './app'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
