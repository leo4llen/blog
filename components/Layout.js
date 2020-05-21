import { useTheme } from 'providers/Theme'

const Layout = ({ children }) => {
  const { theme } = useTheme()

  return (
    <>
      {children}
      <style jsx global>{`
        body {
          margin: 0;
          background: ${theme.background};
          font-family: 'Work Sans', sans-serif;
          color: ${theme.text};
          -moz-transition: background 0.2s ease-in, color 0.2s ease-in;
          -webkit-transition: background 0.2s ease-in, color 0.2s ease-in;
          -o-transition: background 0.2s ease-in, color 0.2s ease-in;
          transition: background 0.2s ease-in, color 0.2s ease-in;
        }

        a {
          color: ${theme.link};
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
      <style jsx>{`
        div {
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}

export default Layout
