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
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        a:hover {
          text-decoration: ${hover ? 'underline' : 'none'};
        }
      `}</style>
    </>
  )
}
