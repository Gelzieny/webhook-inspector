import { app } from '../api/src/server'
import awsLambdaFastify from '@fastify/aws-lambda'

export const handler = awsLambdaFastify(app)