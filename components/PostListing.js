import { Container, A, Hr } from 'components/ui'
import { useTheme } from 'providers/Theme'

const Posts = ({ posts }) => {
  const { theme } = useTheme()
  return (
    <section>
      <Container>
        <p className='description'>
          Yay! You've found my programming blog! I'm Leo and I'm a software
          engineer from Chennai, India. I primarily build apps for the web and I
          love Javascript.
        </p>
        {posts.map(post => (
          <div className='post-card' key={post.id}>
            <h1>
              <A href={`/blog/${post.slug}`} hover={true} socialLink={false}>
                {post.title}
              </A>
            </h1>
            <p>
              <i>{new Date(post.date).toDateString()}</i>
            </p>
          </div>
        ))}
        <Hr color={theme.text} />
      </Container>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          padding: 5vh 3rem;
          align-items: center;
        }

        section .description {
          font-size: 1.5rem;
          line-height: 2;
          text-align: justify;
        }
      `}</style>

      <style jsx>
        {`
          .post-card > h1 {
            font-size: 2rem;
          }
          .post-card > p {
            color: ${theme.subText};
          }

          hr {
            border: 0.5px solid ${theme.text};
          }
        `}
      </style>
    </section>
  )
}

export default Posts
