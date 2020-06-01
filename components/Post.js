import { Container, Img } from 'components/ui'
import { renderPosts } from 'services/contentful'

const Post = ({ post }) => {
  return (
    <>
      <section>
        <Container align="shrink"> {renderPosts(post.post, Img)}</Container>
      </section>

      <style jsx>{`
        section {
          line-height: 1.5;
          display: flex;
          flex-direction: column;
          padding: 6vh 3rem;
          align-items: center;
          text-align: justify;
        }

        section img {
          height: 10px !important;
        }
      `}</style>
    </>
  )
}

export default Post
