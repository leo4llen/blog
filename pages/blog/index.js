import Banner from 'components/Banner'
import Posts from 'components/Posts'
import Head from 'components/Head'
import { getPosts } from 'services/contentful'

const BlogIndex = ({ posts }) => {
  return (
    <>
      <Head />

      <Banner />

      <Posts posts={posts} />
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
