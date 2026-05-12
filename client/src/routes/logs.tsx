import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/logs')({
  component: Logs,
})

function Logs() {
  return <main className="page-wrap px-4 py-12">Logs Page</main>
}
