export const Container = ({ children, align = 'stretch' }) => {
  return (
    <div>
      {children}

      <style jsx>{`
        div {
          display: flex;
          padding: 2vh 2rem;
          flex-direction: column;
          width: 100%;
          max-width: 960px;
        }
      `}</style>

      <style jsx>{`
        align-items: ${align};
      `}</style>
    </div>
  )
}
