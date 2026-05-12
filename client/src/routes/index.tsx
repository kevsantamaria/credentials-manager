import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main>
      <section className="page-wrap px-4 pb-16 pt-14 sm:pt-20">
        Home Page
      </section>
    </main>
  )
}
