import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'

import { connectToDatabase } from './database'
import { createRoutes } from './routes'

export const createServer = async () => {
  try {
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())
    app.use(morgan('combined'))

    await Promise.all([connectToDatabase(), createRoutes(app)])

    return app
  } catch (error) {
    throw error
  }
}