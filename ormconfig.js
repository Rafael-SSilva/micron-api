
module.exports = {
  "type": process.env.DB_TYPE,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.POSTGRES_USER,
  "password": process.env.POSTGRES_PASSWORD,
  "database": process.env.POSTGRES_DB,
  "migrations": [
    "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  "entities": ["./src/modules/**/infra/typeorm/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}
 