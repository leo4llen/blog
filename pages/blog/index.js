import Banner from 'components/Banner'
import PostListing from 'components/PostListing'
import Head from 'components/Head'
import { getPosts } from 'services/contentful'

const BlogIndex = ({ posts }) => {
  return (
    <>
      <Head
        title="Leo Allen's Blog"
        description="My ramblings..."
        url="https://leoallen.me/blog"
      />
      <Banner paths={[{ label: 'Blog' }]} />

      <PostListing posts={posts} />
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts()
  return {
    props: {
      posts,
    },
  }
}

export default BlogIndex
