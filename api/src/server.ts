// src/server.ts
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import ScalarApiReference from '@scalar/fastify-api-reference'

import { env } from './env'
import { getWebhook } from './routes/get-webhook'
import { listWebhooks } from './routes/list-webhooks'
import { deleteWebhook } from './routes/delete-webhook'
import { captureWebhook } from './routes/capture-webhook'
import { generateHandler } from './routes/generate-handler'

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, { origin: true })
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Webhook Inspector API',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(ScalarApiReference, { routePrefix: '/docs' })

app.get('/', async () => ({ message: '🚀 Webhook Inspector API running!' }))

app.register(listWebhooks)
app.register(getWebhook)
app.register(deleteWebhook)
app.register(captureWebhook)
app.register(generateHandler)
