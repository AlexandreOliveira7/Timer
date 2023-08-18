import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/Globals'
import { Router } from './Route'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}
