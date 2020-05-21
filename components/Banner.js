import { useTheme } from 'providers/Theme'

const Banner = () => {
  const { theme } = useTheme()

  return (
    <>
      <section>
        <p>Banner loaded yo</p>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          padding: 2vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: ${theme.primary};
        }
      `}</style>
    </>
  )
}

export default Banner
