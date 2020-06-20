import store from 'store'
import { createContext, useContext, useState, useLayoutEffect } from 'react'
import { pipe, preventDefault } from 'utils'

const THEME = {
  light: {
    background: '#e8e4e1',
    primary: '#47d147',
    text: '#333333',
    subText: '#808080',
    headingFont: "'Press Start 2P', cursive",
    headerColor: '#333333',
    font: "'Source Serif Pro', serif",
  },
  dark: {
    background: '#333333',
    primary: '#47d147',
    text: '#e8e4e1',
    subText: '#808080',
    headingFont: "'Press Start 2P', cursive",
    headerColor: '#333333',
    font: "'Source Serif Pro', serif",
  },
}

const ThemeContext = (() => {
  const DEFAULT_COLOR_MODE = 'dark'
  const DEFAULT_THEME = {
    colorMode: DEFAULT_COLOR_MODE,
    theme: THEME[DEFAULT_COLOR_MODE],
    toggleTheme: () => {},
  }
  return createContext(DEFAULT_THEME)
})()

export const ThemeProvider = ({ children }) => {
  const INITIAL_THEME = {
    colorMode: 'dark',
    theme: THEME['dark'],
    toggleTheme: pipe(preventDefault, toggleTheme),
  }

  const [theme, changeTheme] = useState(INITIAL_THEME)

  useLayoutEffect(() => {
    const storedColorMode = store.get('colorMode')

    if (
      ['light', 'dark'].includes(storedColorMode) &&
      storedColorMode !== theme.colorMode
    )
      changeTheme({
        ...INITIAL_THEME,
        colorMode: storedColorMode,
        theme: THEME[storedColorMode],
      })
  }, [])

  function toggleTheme() {
    changeTheme((currentTheme) => {
      const newColorMode = currentTheme.colorMode === 'light' ? 'dark' : 'light'
      store.set('colorMode', newColorMode)
      return {
        ...INITIAL_THEME,
        colorMode: newColorMode,
        theme: THEME[newColorMode],
      }
    })
  }

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
