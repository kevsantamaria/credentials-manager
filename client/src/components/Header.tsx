import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(17,17,17,0.88)] px-4 backdrop-blur-xl">
      <nav className="page-wrap flex flex-wrap items-center justify-between gap-3 py-3 sm:py-4">
        <h2 className="font-bold tracking-tight">
          <Link to="/" className="transition sm:px-4 sm:py-2">
            Credentials Manager
          </Link>
        </h2>

        <div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-none sm:w-auto sm:flex-nowrap sm:pb-0">
          <Link
            to="/logs"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            Logs
          </Link>
          <details className="relative w-full sm:w-auto">
            <summary className="nav-link list-none cursor-pointer">
              Demos
            </summary>
            <div className="mt-2 min-w-56 rounded-2xl p-2 sm:absolute sm:right-0">
              <a
                href="/demo/form/simple"
                className="block rounded-xl px-3 py-2 text-sm text-[var(--color-text-soft)] no-underline transition hover:bg-white/5 hover:text-[var(--color-text)]"
              >
                Simple Form
              </a>
              <a
                href="/demo/form/address"
                className="block rounded-xl px-3 py-2 text-sm text-[var(--color-text-soft)] no-underline transition hover:bg-white/5 hover:text-[var(--color-text)]"
              >
                Address Form
              </a>
            </div>
          </details>
        </div>
      </nav>
    </header>
  )
}
