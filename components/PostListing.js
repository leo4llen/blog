import { Container, A } from 'components/ui'
import { useTheme } from 'providers/Theme'

const Posts = ({ posts }) => {
  const { theme } = useTheme()
  return (
    <section>
      <Container>
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h2>
              <A href={`/blog/${post.slug}`}>{post.title}</A>
            </h2>
            <p>{new Date(post.date).toDateString()}</p>
            <hr />
          </div>
        ))}
      </Container>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          padding: 5vh 3rem;
          align-items: center;
          text-align: justify;
        }
      `}</style>

      <style jsx>
        {`
          .post-card > p {
            font-size: 1rem;
            color: ${theme.subText};
          }

          .port-card > hr {
            border: 1px solid ${theme.primary};
          }
        `}
      </style>
    </section>
  )
}

export default Posts
