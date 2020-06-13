import { Router, Request, Response } from 'express'

const toolRouter: Router = Router()

toolRouter
  .get('/tools', (req: Request, res: Response) => {
    return res.status(200).json({ ping: 'pong' })
  })

export default toolRouter