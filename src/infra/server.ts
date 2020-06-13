import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'

import { createRoutes } from './routes'

export const createServer = (): express.Application => {
  const app = express()
  app.use(express.json())
  app.use(cors())
  app.use(morgan('combined'))

  createRoutes(app)

  return app
}