import { Container } from 'components/ui'
import { useTheme } from 'providers/Theme'
import { BsSun } from 'react-icons/bs'
import { RiMoonClearLine } from 'react-icons/ri'

const Banner = () => {
  const { colorMode, theme, toggleTheme } = useTheme()

  return (
    <header>
      <Container align="flex-end">
        <a href="#" onClick={() => toggleTheme()} title="Toggle color mode">
          {' '}
          {colorMode === 'dark' ? <RiMoonClearLine /> : <BsSun />}
        </a>
      </Container>
      <Container align="center">
        <h3>Leo Allen's Blog</h3>

        <p className="tagline">
          Yay! You've found my programming blog! I'm Leo and I'm a software
          engineer from Chennai, India. I primarily build apps for the web and I
          love Javascript.
        </p>
      </Container>

      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          padding: 6vh 3rem;
          align-items: center;
          text-align: justify;
        }

        a {
          font-size: 1.5rem;
        }

        a:active {
          color: ${theme.headerColor};
        }

        .tagline {
          line-height: 1.5;
        }
      `}</style>

      <style jsx>
        {`
          header {
            background: ${theme.primary};
            color: ${theme.headerColor};
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${theme.headingFont};
            color: ${theme.headerColor};
          }
        `}
      </style>
    </header>
  )
}

export default Banner
