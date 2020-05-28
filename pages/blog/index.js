import Banner from 'components/Banner'
import Posts from 'components/Posts'
import Head from 'components/Head'
import { getPosts } from 'services/contentful'

export default function Index({ posts }) {
  console.log(posts)
  return (
    <>
      <Head />

      <Banner />

      <Posts />
    </>
  )
}

export async function getStaticProps() {
  let posts = await getPosts()
  return {
    props: {
      posts,
    },
  }
}
