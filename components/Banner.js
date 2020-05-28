import { Container } from 'components/ui'
import { useTheme } from 'providers/Theme'

const Banner = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header>
      <Container align="flex-end"></Container>
      <Container align="center">
        <h3>Leo Allen's Blog</h3>
        <a href="#" onClick={() => toggleTheme()}>
          {' '}
          Change theme
        </a>
        <p className="tagline">
          Yay! You've found my programming blog! I'm Leo and I'm programmer from
          Chennai, India. I primarily write code for the web and I love
          Javascript.
        </p>
      </Container>

      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          padding: 2vh 1.5rem;
          align-items: center;
          text-align: justify;
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
