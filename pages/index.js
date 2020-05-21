import { Container, Row } from 'components/ui'
import Banner from 'components/Banner'
import Head from 'components/Head'
import { useTheme } from 'providers/Theme'

export default function Index() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Head />
      <Container>
        <Banner />
      </Container>
    </>
  )
}

// export async function getStaticProps() {
//   let { items } = await client.getEntries()
//   return {
//     props: {
//       items,
//     },
//   }
// }
