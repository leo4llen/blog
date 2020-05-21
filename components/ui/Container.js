export const Container = ({ children }) => {
  return (
    <>
      <div>{children}</div>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  )
}
