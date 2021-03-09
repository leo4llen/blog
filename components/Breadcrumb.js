import { A } from './ui/A'

const Breadcrumb = ({ paths = [] }) => {
  paths = [{ href: '/', label: 'Home' }, ...paths]
  return (
    <div>
      {paths.map(({ label, href }, i) =>
        href ? (
          <>
            <p key={label}>
              <A href={href} banner={true} hover={true}>
                {label}
              </A>
            </p>
            <span>·</span>
          </>
        ) : (
          <>
            <p key={label}>
              <span className="current">{label}</span>
            </p>
          </>
        )
      )}

      <style jsx>{`
        div > * {
          font-size: 1.2rem;
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
