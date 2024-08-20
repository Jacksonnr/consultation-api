import 'dotenv/config'
import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(['development']).default('development'),
    DATABASE_URL: z.string(),
    PORT: z.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.error('error, ', _env.error.format())
    throw new Error ('error in env')
}


export const env = _env.data

// arquivo criado para conter as configurações para variáveis de ambiente