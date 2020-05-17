import theme from './_theme'

export default function Layout({ children, colorMode = 'dark' }) {
  return (
    <>
      <div>{children}</div>

      <style jsx global>{`
        body {
          background: ${theme[colorMode].background};
          color: ${theme[colorMode].color};
        }
        a {
          color: ${theme.light.link};
        }
      `}</style>
      <style jsx>{`
        div {
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}
