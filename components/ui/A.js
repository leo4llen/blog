import { useTheme } from 'providers/Theme'

export const A = ({ banner = false, hover = true, ...props }) => {
  const { theme } = useTheme()

  if (props.target === '_blank') props.rel = 'noopener noreferrer'

  return (
    <>
      <a {...props}></a>

      <style jsx>{`
        a,
        a:active {
          cursor: pointer;
          color: ${banner ? 'inherit' : theme.primary};
        }

        a:hover {
          text-decoration: ${hover ? 'underline' : 'none'};
        }
      `}</style>
    </>
  )
}
