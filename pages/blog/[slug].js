import Head from 'components/Head'
import Banner from 'components/Banner'
import Post from 'components/Post'
import { getPosts } from 'services/contentful'

const BlogPost = ({ post }) => {
  return (
    <>
      <Head
        title={post.title}
        description={post.description || 'My ramblings...'}
        url={`https://leoallen.me/blog/${post.slug}`}
      />
      <Banner
        paths={[
          { label: 'Blog', href: '/blog' },
          { label: post.title.substr(0, 20) + '...' }
        ]}
        title={post.title}
        subText={new Date(post.date).toDateString()}
      />
      <Post post={post} />
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await getPosts()

  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getPosts(params.slug)

  return { props: { post } }
}

export default BlogPost
