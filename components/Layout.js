import { useTheme } from 'providers/Theme'

export default function Layout({ children }) {
  const { theme } = useTheme()

  return (
    <>
      {children}
      <style jsx global>{`
        body {
          background: ${theme.background};
          color: ${theme.color};
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
