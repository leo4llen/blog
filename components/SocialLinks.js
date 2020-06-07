import { A } from 'components/ui'
import { BsSun } from 'react-icons/bs'
import { RiMoonClearLine } from 'react-icons/ri'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaGithubAlt } from 'react-icons/fa'
import { useTheme } from 'providers/Theme'

const SocialLinks = () => {
  const { colorMode, toggleTheme } = useTheme()
  return (
    <>
      <div className="banner-icons">
        <A
          href="https://github.com/lech4rm"
          target="_blank"
          hover={false}
          banner={true}
        >
          <FaGithubAlt />
        </A>
        <A
          href="https://twitter.com/leo4llen"
          target="_blank"
          hover={false}
          banner={true}
        >
          <AiFillTwitterCircle />
        </A>
        <A
          onClick={toggleTheme}
          title="Toggle color mode"
          hover={false}
          banner={true}
        >
          {colorMode === 'dark' ? <RiMoonClearLine /> : <BsSun />}
        </A>
      </div>

      <style jsx global>
        {`
          .banner-icons > A {
            font-size: 3rem;
            padding-left: 2rem;
          }
        `}
      </style>
    </>
  )
}

export default SocialLinks
