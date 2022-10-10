import 'reflect-metadata'
import 'dotenv/config'

import express, { json, NextFunction, Request, Response } from 'express'
import 'express-async-errors'

import swaggerUi from 'swagger-ui-express'
import cors from 'cors'

import swaggerFile from '../../../../swagger.json'

import { routes } from './routes'
import { AppError } from '@errors/AppError'

import '@shared/infra/typeorm'
import '@shared/container'

import { environment } from '@config/env'

const app = express()
const PORT = environment.PORT || 3333

app.use(cors())
app.use(json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    console.log(err)
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

  // Only for debug development
  return response.status(400).json({
    status: 'error',
    message: err.message,
  })

  // Use for production mode
  // return response.status(500).json({
  //   status: 'error',
  //   message: 'Internal server error',
  // })
})

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})
