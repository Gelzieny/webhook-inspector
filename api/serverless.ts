// serverless.ts
import { app } from './src/server'
import awsLambdaFastify from '@fastify/aws-lambda'

export const handler = awsLambdaFastify(app)
