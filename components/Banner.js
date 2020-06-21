import { Container, Hr } from 'components/ui'
import SocialLinks from 'components/SocialLinks'
import Breadcrumb from 'components/Breadcrumb'
import { useTheme } from 'providers/Theme'

const Banner = ({ paths }) => {
  const { theme } = useTheme()

  return (
    <header>
      <Container align='flex-end'>
        <SocialLinks />
        <Hr color={theme.headerColor} />
      </Container>
      <Container align='center'>
        <h1>Leo Allen's Blog</h1>
      </Container>
      <Container>
        <Breadcrumb paths={paths} />
      </Container>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          padding: 2vh 3rem;
          align-items: center;
          text-align: justify;
          -webkit-box-shadow: 0px 10px 5px -7px rgba(0, 0, 0, 0.18);
          -moz-box-shadow: 0px 10px 5px -7px rgba(0, 0, 0, 0.18);
          box-shadow: 0px 10px 5px -7px rgba(0, 0, 0, 0.18);
          line-height: 1.2;
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
