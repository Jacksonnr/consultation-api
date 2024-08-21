import fastify from 'fastify'
import { consultationRoutes  } from './routes/consultations'

export const app = fastify()

app.register(consultationRoutes)