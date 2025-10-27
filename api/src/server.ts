import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifySwagger } from '@fastify/swagger'
import { fastifyCors } from '@fastify/cors'
import ScalarApiReference from '@scalar/fastify-api-reference'

import { env } from "./env"
import { getWebhook } from './routes/get-webhook'
import { listWebhooks } from './routes/list-webhooks'
import { deleteWebhook } from './routes/delete-webhook'
import { captureWebhook } from './routes/capture-webhook'

const app = fastify().withTypeProvider<ZodTypeProvider>()


app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  // credentials: true,
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Webhook Inspector API',
      description: 'API for capturing and inspecting webhook requests',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(ScalarApiReference, {
  routePrefix: '/docs',
})

app.get("/", async () => ({ message: "🚀 Webhook Inspector API running!" }));

app.register(listWebhooks)
app.register(getWebhook)
app.register(deleteWebhook)
app.register(captureWebhook)

const PORT = env.PORT ? Number(env.PORT) : 3333;

app.listen({ port: PORT, host: '0.0.0.0' }).then(() => {
  console.log(`🔥 HTTP server running on http://localhost:${PORT}!`)
  console.log(`📚 Docs available at http://localhost:${PORT}/docs`)
})