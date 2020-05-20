export default function ({ children }) {
  return (
    <>
      <div>{children}</div>

      <style jsx>{`
        div {
          display: flex;
        }
      `}</style>
    </>
  )
}
