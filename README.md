# MicronAPI
🚀 Create a simple application requiring user account creation, password hashing 
& validating, and other simple CRUD operations.

# Tech Stack

- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

### Used Libbraries

- [Express](https://expressjs.com/pt-br/): Framework for rest api services (routes).
- [Express-async-errors](https://www.npmjs.com/package/express-async-errors): Allows to recover and personalize asyncronous error messages.
- [Cors](https://www.npmjs.com/package/cors): Allow requisitions from cross domains.
- [Reflect-metadata](https://www.npmjs.com/package/reflect-metadata): Allows to use decorators in our app.
- [Tsyringe](https://github.com/microsoft/tsyringe): Facilitates the Dependency injection on NodeJs.
- [TypeORM](https://typeorm.io/#/): ORM lib for database manipulation based on entities/models.
- [Eslint](https://eslint.org/): normalized the code for better consistence and readability.
- [Prettier](https://prettier.io/): keeps our code organized (works with Eslint).

## API documentation

Created using [Swagger](https://swagger.io/)

- [GET] - /api-docs

# Running with Docker (docker compose)

```bash
# Clone the repo
git clone https://github.com/Rafael-SSilva/micron-api.git

# navigate to the project folder
cd micron-api

docker compose build
docker compose up 

or simply 

docker compose up --build

```

# Running in your local machine

- prerequisites: npm / yarn

```bash

# Clone the repo
git clone https://github.com/Rafael-SSilva/micron-api.git

# navigate to the project folder
cd micron-api

# install the dependencies
yarn / npm install

# tranform relational models into entities through TypeOrm
yarn / npm migration:run

# starts the server
yarn dev:server / npm run dev:server
