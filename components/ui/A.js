import { useTheme } from 'providers/Theme'

export const A = ({ color = 'inherit', ...props }) => {
  const { theme } = useTheme()

  if (props.target === '_blank') props.rel = 'noopener noreferrer'

  return (
    <>
      <a {...props}></a>

      <style jsx>{`
        a {
          color: ${theme[color]};
        }
        a:hover {
          color: ${theme.primary};
        }
      `}</style>
    </>
  )
}
