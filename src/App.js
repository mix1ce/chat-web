import React from 'react'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Auth from './components/Auth'
import Main from './components/pages/Main'

const theme = {
  mainColors: {
    white: '#ffffff',
    placeholderColor: '#4a586b',
    main: '#10102b',
    gray: '#23233f',
    lightGray60: '#b7bfcb',
    lightGray10: '#313159',
    lightGray: '#546275',
    // lightBlue: '#165bb1',
    lightBlue: '#297ce3',
    blue: '#1a6bcf',
    darkBlue20: '#1455a5',
    // darkBlue: '#0E1621',
    darkBlue: '#040411',
    darkGray: '#2b2b47',
    accent: '#08081b',
    active: '#080822',
  },
}

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <Switch>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </CookiesProvider>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
