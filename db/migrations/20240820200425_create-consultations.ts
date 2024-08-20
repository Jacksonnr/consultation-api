import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('consultations', (table) => {
        table.text('consultation_type').notNullable()
        table.text('patient').notNullable()
        table.text('patient_telephone_number').notNullable()
        table.decimal('payment_amount', 10, 2).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('consultations')
}

