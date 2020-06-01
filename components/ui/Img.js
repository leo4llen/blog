export const Img = ({ src, title, description }) => {
  return (
    <>
      <img src={src} title={title} alt={description} />

      <style jsx>{`
        img {
          height: auto;
          width: 50%;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}
