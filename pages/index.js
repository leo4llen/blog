import { Container } from 'components/ui'
import { useTheme } from 'providers/Theme'

export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Container>
        {theme.color}
        <p> this is a p inside the container</p>
        <button onClick={() => toggleTheme()}></button>
      </Container>
      <p>
        green
        <span>blue</span>
      </p>
      <a href="#">This is a link</a>
    </>
  )
}
