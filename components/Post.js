import { Container, Img, Hr, A } from 'components/ui'
import { renderPosts } from 'services/contentful'
import { useTheme } from 'providers/Theme'
const Post = ({ post }) => {
  const { theme } = useTheme()
  return (
    <>
      <section>
        <Container>
          <h2 className='text'>{post.title}</h2>

          <span className='sub-text'>
            <i>{new Date(post.date).toDateString()}</i>
          </span>
        </Container>
        <Container align='shrink'>
          <div className='post-body'>{renderPosts(post.post, Img, A)}</div>
          <Hr color={theme} />
        </Container>
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          padding: 3vh 3rem;
          align-items: center;
          text-align: justify;
        }

        .text {
          font-size: 1.5rem;
          color: ${theme.primary};
          text-decoration: underline;
        }

        .post-body {
          font-size: 1.5rem;
          line-height: 2;
        }

        .text {
          font-size: 1.8rem;
        }
      `}</style>
    </>
  )
}

export default Post
