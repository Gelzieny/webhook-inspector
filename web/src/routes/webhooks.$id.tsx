import { Suspense } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { WebhookDetails } from '../components/webhook-details'

export const Route = createFileRoute('/webhooks/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <WebhookDetails id={id} />
    </Suspense>
  )
}
