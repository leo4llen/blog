import Layout from 'components/Layout'
import { ThemeProvider } from 'providers/Theme'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
