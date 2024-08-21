import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'

export async function consultationRoutes(app: FastifyInstance) {
    // Rota para cadastrar uma nova consulta
    app.post('/register', async (request, reply) => {
        const createConsultationsBody = z.object({
            consultation_type: z.string(),
            patient: z.string(),
            patient_telephone_number: z.string(),
            payment_amount: z.number()
        })

        // Valida o corpo da requisição
        const { consultation_type, patient, patient_telephone_number, payment_amount } = createConsultationsBody.parse(request.body)

        // Insere a nova consulta no banco de dados
        await knex('consultations').insert({
            consultation_type,
            patient,
            patient_telephone_number,
            payment_amount
        });

        return reply.status(201).send()
    })

    // Rota para listar todas as consultas
    app.get('/consultations', async (request, reply) => {
        // Recupera todas as consultas do banco de dados
        const listConsultations = await knex('consultations')

        return reply.status(200).send({ listConsultations })
    })

    // Rota para buscar uma consulta específica pelo ID
    app.get('/consultation/:id', async (request, reply) => {
        const getIdConsultation = z.object({
            id: z.coerce.number()
        })

        // Valida o parâmetro da requisição
        const { id } = getIdConsultation.parse(request.params)

        // Busca a consulta no banco de dados
        const consultation = await knex('consultations').where('consultation_id', id).first()

        // Retorna erro se a consulta não for encontrada
        if (!consultation) {
            return reply.status(404).send('Consultation not found!')
        }

        return reply.status(200).send({ consultation })
    });

    // Rota para atualizar uma consulta existente pelo ID
    app.put('/consultation/:id', async (request, reply) => {
        const createUpdateBody = z.object({
            consultation_type: z.string(),
            payment_amount: z.number()
        })

        const getIdConsultation = z.object({
            id: z.coerce.number()
        })

        // Valida o parâmetro e o corpo da requisição
        const { id } = getIdConsultation.parse(request.params)
        const { consultation_type, payment_amount } = createUpdateBody.parse(request.body)

        // Atualiza a consulta no banco de dados
        const result = await knex('consultations')
            .update({ consultation_type, payment_amount })
            .where('consultation_id', id)

        // Retorna erro se a consulta não for encontrada
        if (result === 0) {
            return reply.status(404).send('Consultation not found!');
        }

        return reply.status(200).send('Consultation Updated');
    })

    // Rota para excluir uma consulta pelo ID
    app.delete('/consultation/:id', async (request, reply) => {
        const getIdConsultation = z.object({
            id: z.coerce.number()
        })

        // Valida o parâmetro da requisição
        const { id } = getIdConsultation.parse(request.params)

        // Exclui a consulta no banco de dados
        const result = await knex('consultations').delete().where('consultation_id', id)

        // Retorna erro se a consulta não for encontrada
        if (result === 0) {
            return reply.status(404).send('Consultation not found!')
        }

        return reply.status(200).send('Consultation Deleted')
    })
}
