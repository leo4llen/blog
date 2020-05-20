import store from 'store'
import { createContext, useContext, useState, useEffect } from 'react'

const THEME = {
  light: {
    background: '#f7f7f7',
    link: '#fdcb9e',
    color: '#3f3f44',
    heading: '#cceabb',
  },
  dark: {
    background: '#3f3f44',
    link: '#fdcb9e',
    color: '#f7f7f7',
    heading: '#cceabb',
  },
}

const ThemeContext = (() => {
  const DEFAULT_COLOR_MODE = 'light'
  const DEFAULT_THEME = {
    colorMode: DEFAULT_COLOR_MODE,
    theme: THEME[DEFAULT_COLOR_MODE],
    toggleTheme: () => {},
  }
  return createContext(DEFAULT_THEME)
})()

export const ThemeProvider = ({ children }) => {
  const INITIAL_THEME = {
    colorMode: 'light',
    theme: THEME['light'],
    toggleTheme,
  }

  const [theme, changeTheme] = useState(INITIAL_THEME)

  useEffect(() => {
    const storedColorMode = store.get('colorMode')

    if (
      ['light', 'dark'].includes(storedColorMode) &&
      storedColorMode !== theme
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
