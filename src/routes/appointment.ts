import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database";

export async function appointmentRoutes (app:FastifyInstance) {
    app.post('/register', async (request, reply) =>{
        const createAppointmentBody = z.object({
            // name: z.string(),
            // email: z.string(),
            // password: z.string()
        })

        // const { name, email, password } = createAppointmentBody.parse(request.body)

        await knex('appointment').insert({
            // name,
            // email,
            // password
        })
        return reply.status(201).send()
    })


    app.get('/users', async () => {
        const listAppointment  = await knex('appointment').select('*')

        return { listAppointment  }
    })
}