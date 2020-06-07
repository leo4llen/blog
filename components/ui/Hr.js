export const Hr = ({ color }, ...props) => {
  return (
    <>
      <hr {...props} />

      <style jsx>
        {`
          hr {
            width: 100%;
            border: 1px solid ${color};
          }
        `}
      </style>
    </>
  )
}
