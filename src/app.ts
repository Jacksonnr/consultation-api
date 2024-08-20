import fastify from 'fastify'
import { appointmentRoutes  } from './routes/appointment'

export const app = fastify()

app.register(appointmentRoutes)