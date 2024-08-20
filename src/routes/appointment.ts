import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database";

export async function appointmentRoutes (app:FastifyInstance) {
    app.post('/register', async (request, reply) =>{
        const createAppointmentBody = z.object({
            consultation_type: z.string(),
            patient: z.string(),
            patient_telephone_number: z.string(),
            payment_amount: z.number()
        })

        const { consultation_type, patient, patient_telephone_number, payment_amount } = createAppointmentBody.parse(request.body)

        await knex('appointment').insert({
            consultation_type,
            patient,
            patient_telephone_number,
            payment_amount
        })
        return reply.status(201).send()
    })


    app.get('/users', async () => {
        const listAppointment  = await knex('appointment').select('*')

        return { listAppointment  }
    })
}