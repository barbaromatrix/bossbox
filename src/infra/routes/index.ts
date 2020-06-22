import { RequestHandler, Application } from 'express'
import { default as toolRouter } from './tools'
import {default as authRouter } from './auth'

export const createRoutes = (app: Application): RequestHandler =>
  app
  .use(toolRouter)
  .use(authRouter)