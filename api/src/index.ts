import { app } from './server'
import { env } from './env'

const PORT = env.PORT ? Number(env.PORT) : 3333

app.listen({ port: PORT, host: '0.0.0.0' })
  .then(() => {
    console.log(`🔥 Server running on http://localhost:${PORT}`)
    console.log(`📚 Docs available at http://localhost:${PORT}/docs`)
  })
  .catch((err) => {
    console.error('❌ Error starting server:', err)
    process.exit(1)
  })
