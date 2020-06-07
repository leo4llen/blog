import { A } from './ui/A'

const Breadcrumb = ({ paths = [] }) => {
  paths = [{ href: '/', label: 'Home' }, ...paths]
  return (
    <div>
      {paths.map(({ label, href }, i) =>
        href ? (
          <>
            <p>
              <A href={href} banner={true} hover={true}>
                {label}
              </A>
            </p>
            <span>·</span>
          </>
        ) : (
          <>
            <p>
              <span className="current">{label}</span>
            </p>
          </>
        )
      )}

      <style jsx>{`
        div > * {
          font-size: 1.8rem;
          display: inline-block;
          padding-right: 1rem;
        }
        .current {
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default Breadcrumb
