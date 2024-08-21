import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database";

export async function consultationRoutes (app:FastifyInstance) {
    app.post('/register', async (request, reply) =>{
        const createConsultationsBody = z.object({
            consultation_type: z.string(),
            patient: z.string(),
            patient_telephone_number: z.string(),
            payment_amount: z.number() 
        })

        const { consultation_type, patient, patient_telephone_number, payment_amount } = createConsultationsBody.parse(request.body)

        await knex('consultations').insert({
            consultation_type,
            patient,
            patient_telephone_number,
            payment_amount
        })
        return reply.status(201).send()
    })


    app.get('/users', async (request, reply) => {
        const listConsultations  = await knex('consultations').select()

        return reply.status(200).send( { listConsultations } )
    })
}