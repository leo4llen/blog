export const Img = ({ src, title, description }) => {
  return (
    <>
      <img src={src} title={title} alt={description} />

      <style jsx>{`
        img {
          display: block;
          padding: 1rem;
          height: auto;
          width: 60%;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}
