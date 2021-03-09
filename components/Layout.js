import { useTheme } from 'providers/Theme'

const Layout = ({ children }) => {
  const { theme } = useTheme()

  return (
    <>
      {children}

      {/* Global styles */}

      <style jsx global>{`
        body {
          margin: 0;
          -moz-transition: background 0.2s ease-in, color 0.2s ease-in;
          -webkit-transition: background 0.2s ease-in, color 0.2s ease-in;
          -o-transition: background 0.2s ease-in, color 0.2s ease-in;
          transition: background 0.2s ease-in, color 0.2s ease-in;
          min-height: 90vh;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 400;
        }

        a {
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        @media screen and (max-width: 960px) {
          html {
            font-size: 12px;
            line-height: 1.5;
          }
        }

        @-webkit-keyframes blinker {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes blinker {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .blinker {
          -webkit-animation-name: blinker;
          -webkit-animation-duration: 1s;
          -webkit-animation-timing-function: linear;
          -webkit-animation-iteration-count: infinite;

          animation-name: blinker;
          animation-duration: 1s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <style jsx global>{`
        body {
          font-family: ${theme.font};
          color: ${theme.text};
          background: ${theme.background};
        }
        a {
          color: ${theme.link};
        }
        .sub-text {
          color: ${theme.subText};
        }
      `}</style>
    </>
  )
}

export default Layout
