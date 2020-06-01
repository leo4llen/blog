import { useTheme } from 'providers/Theme'

export const A = ({ socialLink = false, hover = true, ...props }) => {
  const { theme } = useTheme()

  if (props.target === '_blank') props.rel = 'noopener noreferrer'

  return (
    <>
      <a {...props}></a>

      <style jsx>{`
        a,
        a:active {
          font-size: 2rem;
          color: ${socialLink ? 'inherit' : theme.color};
        }

        a:hover {
          text-decoration: ${socialLink ? 'none' : 'underline'};
        }
      `}</style>
    </>
  )
}
