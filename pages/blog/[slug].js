import { getPosts } from 'services/contentful'

const BlogPost = ({ post }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: post.post }} />
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await getPosts()

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  console.log(params.slug)
  const post = await getPosts(params.slug)

  console.log(post)
  return { props: { post } }
}

export default BlogPost
