import { env } from './env'
import { app } from './app'

app.listen({
    port: env.PORT
}).then(() => {
    console.log(`server is running in port ${env.PORT}`)
})