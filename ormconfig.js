module.exports = {
  name: 'default',
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE,
  useUnifiedTopology: true,
  logging: ['query', 'error'],
  synchronize: true,
  entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
  cli : {
    entitiesDir : "./src/modules/**/infra/typeorm/entities"
  }
}
