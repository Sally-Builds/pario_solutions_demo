import { cleanEnv, port, str, num } from 'envalid'


function validateEnv (): void {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production']
        }),
        PORT: port({default: 3000}),
        DATABASE_URL: str(),
        JWT_SECRET: str(),
        JWT_EXPIRES_IN: str(),
        JWT_COOKIE_EXPIRES_IN: num({default: 30})
    })
}

export default validateEnv