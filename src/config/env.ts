export const environment = {
  PORT: process.env.APP_PORT || '3333',
  APP_SECRET: process.env.APP_SECRET,
  DB_TYPE: process.env.DB_TYPE || 'postgres',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.POSTGRES_USER || 'localhost',
  DB_PASS: process.env.POSTGRES_PASSWORD || 'localhost',
  DB_PORT: process.env.DB_PORT || 5432,
  DATABASE: process.env.POSTGRES_DB || 'micron',
}
