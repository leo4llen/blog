import { Container } from 'components/ui'
import SocialLinks from 'components/SocialLinks'
import { useTheme } from 'providers/Theme'

const Banner = () => {
  const { theme } = useTheme()

  return (
    <header>
      <Container align="flex-end">
        <SocialLinks />
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
          -webkit-box-shadow: 0px 10px 5px -7px rgba(0, 0, 0, 0.18);
          -moz-box-shadow: 0px 10px 5px -7px rgba(0, 0, 0, 0.18);
          box-shadow: 0px 10px 5px -7px rgba(0, 0, 0, 0.18);
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
