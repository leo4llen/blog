import Head from 'components/Head'
import { A } from 'components/ui'
import { Container } from 'components/ui'
import { useTheme } from 'providers/Theme'
import { BsSun } from 'react-icons/bs'
import { RiMoonClearLine } from 'react-icons/ri'

const Index = () => {
  const { theme, colorMode, toggleTheme } = useTheme()
  return (
    <>
      <Head />
      <section>
        <Container align="flex-end">
          <A
            style={{ 'font-size': '3rem' }}
            onClick={toggleTheme}
            title="Toggle color mode"
            hover={false}
            banner={true}
          >
            {colorMode === 'dark' ? <RiMoonClearLine /> : <BsSun />}
          </A>
        </Container>
        <Container align="center">
          <img src="/images/kitteh.gif" alt="Kitteh Logo" />
          <h4>
            I'm Leo. I write code, play FPS and dissociate
            <span className="blinker">_</span>
          </h4>
          <ul>
            <li>
              <A href="/blog">Blog</A>
            </li>
            <li>
              <A href="https://gallery.leoallen.me">Gallery</A>
            </li>
            <li>
              <A href="https://github.com/lech4rm" target="_blank">
                Github
              </A>
            </li>
          </ul>
        </Container>
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          padding: 6vh 3rem;
          align-items: center;
          line-height: 2;
        }

        h4 {
          text-align: center;
        }
        img {
          height: 30vh;
          margin: 5vh;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        ul > li {
          font-size: 0.8rem;
          display: inline-block;
          padding: 3rem;
        }
      `}</style>

      <style jsx>{`
        section {
          font-family: ${theme.headingFont};
          color: ${theme.primary};
        }
      `}</style>
    </>
  )
}

export default Index
