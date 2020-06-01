import Banner from 'components/Banner'
import PostListing from 'components/PostListing'
import Head from 'components/Head'
import { getPosts } from 'services/contentful'

const BlogIndex = ({ posts }) => {
  return (
    <>
      <Head />

      <Banner />

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
