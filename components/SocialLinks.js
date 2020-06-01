import { A } from 'components/ui'
import { BsSun } from 'react-icons/bs'
import { RiMoonClearLine } from 'react-icons/ri'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaGithubAlt } from 'react-icons/fa'
import { useTheme } from 'providers/Theme'

const SocialLinks = () => {
  const { theme, colorMode, toggleTheme } = useTheme()
  return (
    <>
      <div className="banner-icons">
        <A
          href="https://github.com/lech4rm"
          target="_blank"
          hover={false}
          socialLink={true}
        >
          <FaGithubAlt />
        </A>
        <A
          href="https://twitter.com/leo4llen"
          target="_blank"
          hover={false}
          socialLink={true}
        >
          <AiFillTwitterCircle />
        </A>
        <A
          href="#"
          onClick={() => toggleTheme()}
          title="Toggle color mode"
          hover={false}
          socialLink={true}
        >
          {' '}
          {colorMode === 'dark' ? <RiMoonClearLine /> : <BsSun />}
        </A>
      </div>

      <style jsx>
        {`
          .banner-icons a {
            padding: 10px 10px !important;
            font-size: 1.5rem;
            color: ${theme.headerColor};
          }
        `}
      </style>
    </>
  )
}

export default SocialLinks
