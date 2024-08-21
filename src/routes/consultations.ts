import { FastifyInstance } from "fastify";
import { number, z } from "zod";
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


    app.get('/consultations', async (request, reply) => {
        const listConsultations  = await knex('consultations').select()

        return reply.status(200).send( { listConsultations } )
    })


    app.get('/consultation/:id', async (request, reply) => {
        const getIdConsultation = z.object({
            id: z.coerce.number()
        })

        const { id } = getIdConsultation.parse(request.params)

        const consultation = await knex('consultations')
        .where('consultation_id', id).first()

        return reply.status(200).send( { consultation } )
    })
}