import { RequestHandler, Application } from 'express'
import { default as toolRouter } from './tools'

export const createRoutes = (app: Application): RequestHandler => {
  return app.use(toolRouter)
}