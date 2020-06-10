import Head from 'next/head'

const HeadTag = ({
  title = "Leo Allen's homepage",
  description = 'My homepage',
  url = 'https://leoallen.me',
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="author" content="Leo Allen" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="leo, allen, javascript, coding, web developer, programmer, js, html, css, rant, self, taught"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  )
}

export default HeadTag
