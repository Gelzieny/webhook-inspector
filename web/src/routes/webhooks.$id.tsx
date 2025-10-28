import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/webhooks/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/webhooks/$id"!</div>
}
